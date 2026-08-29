import { useEffect, useState } from "react";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { courseOptions } from "../../data/siteData";

interface Inquiry {
  id: number;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  preferredCourse: string;
  message?: string | null;
  status: string;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export function AdminInquiriesPage() {
  const { token } = useAdminAuth();

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [courseFilter, setCourseFilter] = useState("ALL");

  // Selected Inquiry for Status/Notes Modal
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [modalStatus, setModalStatus] = useState("PENDING");
  const [modalNotes, setModalNotes] = useState("");
  const [savingModal, setSavingModal] = useState(false);

  useEffect(() => {
    document.title = "Admission Inquiries - Admin Portal";
    fetchInquiries();
  }, [statusFilter, courseFilter]);

  async function fetchInquiries() {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.append("search", search.trim());
      if (statusFilter !== "ALL") params.append("status", statusFilter);
      if (courseFilter !== "ALL") params.append("course", courseFilter);

      const response = await fetch(`/api/admin/inquiries?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to retrieve inquiries.");
      }

      setInquiries(data.inquiries ?? []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error loading inquiries.");
    } finally {
      setLoading(false);
    }
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchInquiries();
  }

  function openEditModal(inquiry: Inquiry) {
    setSelectedInquiry(inquiry);
    setModalStatus(inquiry.status);
    setModalNotes(inquiry.notes ?? "");
  }

  function closeEditModal() {
    setSelectedInquiry(null);
    setSavingModal(false);
  }

  async function handleSaveStatusNotes(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedInquiry) return;

    setSavingModal(true);
    try {
      const response = await fetch(`/api/admin/inquiries/${selectedInquiry.id}`, {
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
        throw new Error(data.error ?? "Failed to update inquiry.");
      }

      // Update local list
      setInquiries((prev) =>
        prev.map((item) => (item.id === selectedInquiry.id ? data.inquiry : item)),
      );
      closeEditModal();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Failed to update.");
    } finally {
      setSavingModal(false);
    }
  }

  async function handleDelete(id: number) {
    if (!window.confirm("Are you sure you want to permanently delete this admission inquiry?")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/inquiries/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "Failed to delete inquiry.");
      }

      setInquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Failed to delete.");
    }
  }

  function exportToCSV() {
    if (inquiries.length === 0) {
      alert("No inquiry records to export.");
      return;
    }

    const headers = [
      "ID",
      "Applicant Name",
      "Email",
      "Phone",
      "Preferred Course",
      "Message",
      "Status",
      "Counselor Notes",
      "Submitted Date",
    ];

    const csvRows = [
      headers.join(","),
      ...inquiries.map((row) =>
        [
          row.id,
          `"${(row.applicantName || "").replace(/"/g, '""')}"`,
          `"${(row.applicantEmail || "").replace(/"/g, '""')}"`,
          `"${(row.applicantPhone || "").replace(/"/g, '""')}"`,
          `"${(row.preferredCourse || "").replace(/"/g, '""')}"`,
          `"${(row.message || "").replace(/"/g, '""')}"`,
          `"${(row.status || "").replace(/"/g, '""')}"`,
          `"${(row.notes || "").replace(/"/g, '""')}"`,
          `"${new Date(row.createdAt).toLocaleString()}"`,
        ].join(","),
      ),
    ];

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `DigitalMozo_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function renderStatusBadge(status: string) {
    switch (status?.toUpperCase()) {
      case "PENDING":
        return (
          <span className="inline-flex items-center rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-400 border border-amber-500/20">
            ⏳ Pending
          </span>
        );
      case "CONTACTED":
        return (
          <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-bold text-blue-400 border border-blue-500/20">
            📞 Contacted
          </span>
        );
      case "ADMITTED":
        return (
          <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
            ✅ Admitted
          </span>
        );
      case "REJECTED":
        return (
          <span className="inline-flex items-center rounded-md bg-red-500/10 px-2.5 py-1 text-xs font-bold text-red-400 border border-red-500/20">
            ❌ Rejected
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
      {/* Header & CSV Export */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-white sm:text-3xl">Admission Inquiries</h1>
          <p className="mt-1 text-sm text-slate-400">
            Manage incoming student leads from the "Ready to Apply" landing page form.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={fetchInquiries}
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-slate-700 hover:text-white"
          >
            <svg className={`h-4 w-4 ${loading ? "animate-spin text-blue-400" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export to CSV
          </button>
        </div>
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
              placeholder="Search by student name, email, phone, or course..."
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

        {/* Status Filter Chips and Course Select */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-800/80 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1">Status:</span>
            {["ALL", "PENDING", "CONTACTED", "ADMITTED", "REJECTED"].map((status) => (
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
                {status === "ALL" ? "All Leads" : status}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 shrink-0">Course:</span>
            <select
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 focus:border-blue-500 focus:outline-none"
            >
              <option value="ALL">All Courses</option>
              {courseOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Inquiries Data Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="border-b border-slate-800 bg-slate-800/60 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-4">Applicant Info</th>
                <th className="px-5 py-4">Quick Contact</th>
                <th className="px-5 py-4">Preferred Course</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Counselor Remarks</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
                      <span>Loading inquiries...</span>
                    </div>
                  </td>
                </tr>
              ) : inquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center text-slate-400">
                    No admission inquiries found matching the filters.
                  </td>
                </tr>
              ) : (
                inquiries.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition">
                    {/* Applicant Info */}
                    <td className="px-5 py-4">
                      <p className="font-bold text-white">{item.applicantName}</p>
                      <p className="text-xs text-slate-400">{item.applicantEmail}</p>
                      {item.message && (
                        <p className="mt-1 text-xs text-slate-400 italic bg-slate-800/60 rounded px-2 py-1 border border-slate-700/50 max-w-xs truncate" title={item.message}>
                          "{item.message}"
                        </p>
                      )}
                    </td>

                    {/* Quick Contact buttons */}
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-slate-200">
                          {item.applicantPhone}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <a
                            href={`https://wa.me/91${item.applicantPhone.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(item.applicantName)},%20we%20received%20your%20inquiry%20at%20DigitalMozo%20Institute%20for%20${encodeURIComponent(item.preferredCourse)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded bg-emerald-600/20 px-2 py-1 text-[11px] font-bold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition"
                            title="Open WhatsApp Chat"
                          >
                            💬 WhatsApp
                          </a>
                          <a
                            href={`tel:${item.applicantPhone}`}
                            className="inline-flex items-center gap-1 rounded bg-blue-600/20 px-2 py-1 text-[11px] font-bold text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition"
                            title="Direct Call"
                          >
                            📞 Call
                          </a>
                        </div>
                      </div>
                    </td>

                    {/* Preferred Course */}
                    <td className="px-5 py-4">
                      <span className="inline-block rounded-lg bg-blue-950/40 px-2.5 py-1 text-xs font-semibold text-blue-300 border border-blue-800/40">
                        {item.preferredCourse}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">{renderStatusBadge(item.status)}</td>

                    {/* Notes */}
                    <td className="px-5 py-4 max-w-[200px]">
                      {item.notes ? (
                        <p className="text-xs text-slate-300 line-clamp-2" title={item.notes}>
                          {item.notes}
                        </p>
                      ) : (
                        <span className="text-xs text-slate-500 italic">No remarks</span>
                      )}
                    </td>

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
                          title="Update Status & Notes"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="rounded-lg bg-red-600/20 p-2 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white transition"
                          title="Delete Lead"
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

      {/* Edit Status & Notes Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Update Admission Lead</h3>
                <p className="text-xs text-slate-400">{selectedInquiry.applicantName}</p>
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

            <form onSubmit={handleSaveStatusNotes} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Admission Status
                </label>
                <select
                  value={modalStatus}
                  onChange={(e) => setModalStatus(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="PENDING">⏳ Pending Follow-up</option>
                  <option value="CONTACTED">📞 Contacted / In Discussion</option>
                  <option value="ADMITTED">✅ Enrolled / Admitted</option>
                  <option value="REJECTED">❌ Not Interested / Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Counselor Notes / Progress Remarks
                </label>
                <textarea
                  rows={4}
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  placeholder="e.g., Called applicant on Monday. Interested in Safety Officer course, scheduled campus visit for Friday."
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
                  {savingModal ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
