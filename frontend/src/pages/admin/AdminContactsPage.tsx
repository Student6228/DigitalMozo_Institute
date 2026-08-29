import { useEffect, useState } from "react";
import { useAdminAuth } from "../../context/AdminAuthContext";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  status: string;
  notes?: string | null;
  createdAt: string;
}

export function AdminContactsPage() {
  const { token } = useAdminAuth();

  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [selectedMsg, setSelectedMsg] = useState<ContactMessage | null>(null);
  const [modalStatus, setModalStatus] = useState("UNREAD");
  const [modalNotes, setModalNotes] = useState("");
  const [savingModal, setSavingModal] = useState(false);

  useEffect(() => {
    document.title = "Contact Messages - Admin Portal";
    fetchMessages();
  }, [statusFilter]);

  async function fetchMessages() {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.append("search", search.trim());
      if (statusFilter !== "ALL") params.append("status", statusFilter);

      const response = await fetch(`/api/admin/contacts?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to retrieve messages.");
      }

      setMessages(data.messages ?? []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error loading messages.");
    } finally {
      setLoading(false);
    }
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchMessages();
  }

  function openEditModal(msg: ContactMessage) {
    setSelectedMsg(msg);
    setModalStatus(msg.status);
    setModalNotes(msg.notes ?? "");
  }

  function closeEditModal() {
    setSelectedMsg(null);
    setSavingModal(false);
  }

  async function handleSaveStatus(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedMsg) return;

    setSavingModal(true);
    try {
      const response = await fetch(`/api/admin/contacts/${selectedMsg.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: modalStatus,
          notes: modalNotes,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to update contact message.");
      }

      setMessages((prev) =>
        prev.map((item) => (item.id === selectedMsg.id ? data.message : item)),
      );
      closeEditModal();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Failed to update.");
    } finally {
      setSavingModal(false);
    }
  }

  async function handleDelete(id: number) {
    if (!window.confirm("Are you sure you want to delete this contact message?")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "Failed to delete message.");
      }

      setMessages((prev) => prev.filter((item) => item.id !== id));
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Failed to delete.");
    }
  }

  function renderStatusBadge(status: string) {
    switch (status?.toUpperCase()) {
      case "UNREAD":
        return (
          <span className="inline-flex items-center rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-400 border border-amber-500/20">
            ✉️ Unread
          </span>
        );
      case "READ":
        return (
          <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-bold text-blue-400 border border-blue-500/20">
            👁️ Read
          </span>
        );
      case "RESOLVED":
        return (
          <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
            ✅ Resolved
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center rounded-md bg-slate-700 px-2.5 py-1 text-xs font-bold text-slate-300">
            {status}
          </span>
        );
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-white sm:text-3xl">Contact Messages</h1>
          <p className="mt-1 text-sm text-slate-400">
            Inquiries received via the "Get in Touch" section on the main website.
          </p>
        </div>
        <button
          onClick={fetchMessages}
          className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-slate-700 hover:text-white shrink-0"
        >
          <svg className={`h-4 w-4 ${loading ? "animate-spin text-blue-400" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-950/40 p-4 text-sm text-red-300">
          ⚠️ {error}
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl space-y-4">
        <form onSubmit={handleSearchSubmit} className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by sender name, email, phone, or message contents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/90 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            <svg className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-500 transition"
          >
            Search
          </button>
        </form>

        {/* Status Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-4">
          <span className="text-xs font-semibold text-slate-400 mr-1">Filter:</span>
          {["ALL", "UNREAD", "READ", "RESOLVED"].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                statusFilter === status
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {status === "ALL" ? "All Messages" : status}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="border-b border-slate-800 bg-slate-800/60 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-4">Sender</th>
                <th className="px-5 py-4">Phone / WhatsApp</th>
                <th className="px-5 py-4">Message</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
                      <span>Loading contact messages...</span>
                    </div>
                  </td>
                </tr>
              ) : messages.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-slate-400">
                    No contact messages found matching the filter.
                  </td>
                </tr>
              ) : (
                messages.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition">
                    {/* Sender */}
                    <td className="px-5 py-4">
                      <p className="font-bold text-white">{item.name}</p>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-xs text-blue-400 hover:underline"
                      >
                        {item.email}
                      </a>
                    </td>

                    {/* Phone & WhatsApp */}
                    <td className="px-5 py-4 whitespace-nowrap">
                      {item.phone ? (
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-slate-200">{item.phone}</span>
                          <div className="flex items-center gap-1.5">
                            <a
                              href={`https://wa.me/91${item.phone.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(item.name)},%20we%20received%20your%20message%20at%20DigitalMozo%20Institute.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded bg-emerald-600/20 px-2 py-0.5 text-[11px] font-bold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition"
                            >
                              💬 WhatsApp
                            </a>
                            <a
                              href={`tel:${item.phone}`}
                              className="inline-flex items-center gap-1 rounded bg-blue-600/20 px-2 py-0.5 text-[11px] font-bold text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition"
                            >
                              📞 Call
                            </a>
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500 italic">Not provided</span>
                      )}
                    </td>

                    {/* Message */}
                    <td className="px-5 py-4 max-w-sm">
                      <p className="text-xs text-slate-200 line-clamp-2">{item.message}</p>
                      {item.notes && (
                        <p className="mt-1 text-[11px] text-amber-300/90 font-medium">
                          Note: {item.notes}
                        </p>
                      )}
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">{renderStatusBadge(item.status)}</td>

                    {/* Date */}
                    <td className="px-5 py-4 text-xs text-slate-400 whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal(item)}
                          className="rounded-lg bg-blue-600/20 p-2 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition"
                          title="View Message & Update Status"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="rounded-lg bg-red-600/20 p-2 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white transition"
                          title="Delete Message"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View & Update Modal */}
      {selectedMsg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Contact Message Details</h3>
                <p className="text-xs text-slate-400">From: {selectedMsg.name} ({selectedMsg.email})</p>
              </div>
              <button
                onClick={closeEditModal}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Message Content:
                </p>
                <p className="text-sm text-slate-100 whitespace-pre-wrap leading-relaxed">
                  {selectedMsg.message}
                </p>
              </div>

              <form onSubmit={handleSaveStatus} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Update Message Status
                  </label>
                  <select
                    value={modalStatus}
                    onChange={(e) => setModalStatus(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="UNREAD">✉️ Unread</option>
                    <option value="READ">👁️ Read / In Review</option>
                    <option value="RESOLVED">✅ Resolved / Answered</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Internal Follow-Up Notes
                  </label>
                  <textarea
                    rows={3}
                    value={modalNotes}
                    onChange={(e) => setModalNotes(e.target.value)}
                    placeholder="e.g., Sent course prospectus via email on Tuesday."
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={closeEditModal}
                    className="rounded-xl border border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-300 hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingModal}
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-500 disabled:opacity-60"
                  >
                    {savingModal ? "Saving..." : "Update Status"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
