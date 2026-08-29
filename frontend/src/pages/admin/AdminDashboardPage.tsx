import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";

interface DashboardStats {
  totalInquiries: number;
  pendingInquiries: number;
  admittedInquiries: number;
  totalContacts: number;
  unreadContacts: number;
  totalUsers: number;
  recentInquiries: Array<{
    id: number;
    applicantName: string;
    applicantEmail: string;
    applicantPhone: string;
    preferredCourse: string;
    status: string;
    createdAt: string;
  }>;
  recentContacts: Array<{
    id: number;
    name: string;
    email: string;
    phone?: string | null;
    message: string;
    status: string;
    createdAt: string;
  }>;
  courseDistribution: Array<{
    course: string;
    count: number;
  }>;
}

export function AdminDashboardPage() {
  const { token } = useAdminAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Admin Dashboard - DigitalMozo Institute";
    fetchStats();
  }, []);

  async function fetchStats() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/stats", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to load dashboard statistics.");
      }
      setStats(data.stats);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error fetching stats.");
    } finally {
      setLoading(false);
    }
  }

  function getStatusBadge(status: string) {
    switch (status?.toUpperCase()) {
      case "PENDING":
        return <span className="inline-flex items-center rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-bold text-amber-400 border border-amber-500/20">Pending</span>;
      case "CONTACTED":
        return <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-bold text-blue-400 border border-blue-500/20">Contacted</span>;
      case "ADMITTED":
        return <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/20">Admitted</span>;
      case "REJECTED":
        return <span className="inline-flex items-center rounded-md bg-red-500/10 px-2 py-0.5 text-xs font-bold text-red-400 border border-red-500/20">Rejected</span>;
      case "UNREAD":
        return <span className="inline-flex items-center rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-bold text-amber-400 border border-amber-500/20">Unread</span>;
      case "READ":
        return <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-bold text-blue-400 border border-blue-500/20">Read</span>;
      case "RESOLVED":
        return <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/20">Resolved</span>;
      default:
        return <span className="inline-flex items-center rounded-md bg-slate-700 px-2 py-0.5 text-xs font-bold text-slate-300">{status}</span>;
    }
  }

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-white sm:text-3xl">Executive Dashboard</h1>
          <p className="mt-1 text-sm text-slate-400">
            Real-time analytics for admission leads, student inquiries, and public messages.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchStats}
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-slate-700 hover:text-white"
          >
            <svg className={`h-4 w-4 ${loading ? "animate-spin text-blue-400" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Data
          </button>
          <Link
            to="/admin/inquiries"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-500 hover:to-indigo-500"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            View All Inquiries
          </Link>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-950/40 p-4 text-sm text-red-300">
          ⚠️ {error}
        </div>
      )}

      {/* KPI Cards Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Inquiries */}
        <Link
          to="/admin/inquiries"
          className="group rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-blue-500/10"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total Inquiries
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-black text-white">
              {loading ? "--" : (stats?.totalInquiries ?? 0)}
            </p>
            <p className="mt-1 text-xs text-slate-400">All submitted admission leads</p>
          </div>
        </Link>

        {/* Pending Inquiries */}
        <Link
          to="/admin/inquiries?status=PENDING"
          className="group rounded-2xl border border-amber-500/30 bg-amber-950/10 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/60"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Pending Follow-Ups
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-black text-amber-400">
              {loading ? "--" : (stats?.pendingInquiries ?? 0)}
            </p>
            <p className="mt-1 text-xs text-amber-300/80">Requires counselor call</p>
          </div>
        </Link>

        {/* Contact Messages */}
        <Link
          to="/admin/messages"
          className="group rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-indigo-500/10"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Contact Messages
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-black text-white">
                {loading ? "--" : (stats?.totalContacts ?? 0)}
              </p>
              {(stats?.unreadContacts ?? 0) > 0 && (
                <span className="text-xs font-bold text-amber-400">
                  ({stats?.unreadContacts} unread)
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-400">From Get in Touch section</p>
          </div>
        </Link>

        {/* System Users */}
        <Link
          to="/admin/users"
          className="group rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-purple-500/10"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              System Accounts
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-black text-white">
              {loading ? "--" : (stats?.totalUsers ?? 0)}
            </p>
            <p className="mt-1 text-xs text-slate-400">Admins, counselors & staff</p>
          </div>
        </Link>
      </div>

      {/* Main Content Grid: Course Distribution & Recent Inquiries */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Inquiries (2 cols) */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-white">Recent Admission Leads</h2>
              <p className="text-xs text-slate-400">Latest applicants from the Ready to Apply form</p>
            </div>
            <Link
              to="/admin/inquiries"
              className="text-xs font-bold text-blue-400 hover:text-blue-300"
            >
              View All Leads →
            </Link>
          </div>

          <div className="mt-4 divide-y divide-slate-800 overflow-x-auto">
            {loading ? (
              <div className="py-12 text-center text-sm text-slate-400">Loading recent leads...</div>
            ) : !stats?.recentInquiries || stats.recentInquiries.length === 0 ? (
              <div className="py-12 text-center text-sm text-slate-400">No inquiries received yet.</div>
            ) : (
              stats.recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="flex flex-col gap-2 py-3.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white">{inquiry.applicantName}</span>
                      {getStatusBadge(inquiry.status)}
                    </div>
                    <p className="text-xs text-blue-400 mt-0.5 truncate">{inquiry.preferredCourse}</p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                      <span>✉️ {inquiry.applicantEmail}</span>
                      <span>📞 {inquiry.applicantPhone}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 sm:pt-0">
                    <a
                      href={`https://wa.me/91${inquiry.applicantPhone.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(inquiry.applicantName)},%20thank%20you%20for%20your%20inquiry%20at%20DigitalMozo%20Institute%20for%20${encodeURIComponent(inquiry.preferredCourse)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg bg-emerald-600/20 px-2.5 py-1.5 text-xs font-bold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition"
                      title="Direct WhatsApp"
                    >
                      💬 WhatsApp
                    </a>
                    <a
                      href={`tel:${inquiry.applicantPhone}`}
                      className="inline-flex items-center gap-1 rounded-lg bg-blue-600/20 px-2.5 py-1.5 text-xs font-bold text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition"
                      title="Direct Call"
                    >
                      📞 Call
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Inquiries by Course Breakdown (1 col) */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-white">Course Demand</h2>
            <p className="text-xs text-slate-400">Distribution of leads by program</p>
          </div>

          <div className="mt-5 space-y-4">
            {loading ? (
              <div className="py-8 text-center text-xs text-slate-400">Loading demand stats...</div>
            ) : !stats?.courseDistribution || stats.courseDistribution.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400">No course data yet.</div>
            ) : (
              stats.courseDistribution.map((item, idx) => {
                const total = stats.totalInquiries || 1;
                const percentage = Math.round((item.count / total) * 100);
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300 truncate max-w-[200px]" title={item.course}>
                        {item.course}
                      </span>
                      <span className="text-blue-400 shrink-0 font-bold">
                        {item.count} ({percentage}%)
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
