import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";

export function AdminLoginPage() {
  const { isAuthenticated, login } = useAdminAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDefaultHint, setShowDefaultHint] = useState(true);

  useEffect(() => {
    document.title = "Admin Login - DigitalMozo Institute";
    if (isAuthenticated) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to login. Please check your credentials.");
      }

      if (data.success && data.token && data.user) {
        login(data.token, data.user);
        navigate("/admin/dashboard");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected login error occurred.");
    } finally {
      setLoading(false);
    }
  }

  function fillDefaultCredentials() {
    setEmail("faizur544@gmail.com");
    setPassword("Faizur@7035");
  }

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] px-4 py-12 sm:px-6 lg:px-8 text-slate-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-xl shadow-blue-500/25 text-2xl font-black text-white">
          DM
        </div>
        <h1 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
          DigitalMozo Institute
        </h1>
        <p className="mt-1 text-sm font-medium text-blue-400 uppercase tracking-wider">
          Administrative Control Center
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
          {error && (
            <div className="mb-6 rounded-xl border border-red-500/30 bg-red-950/40 p-4 text-sm text-red-300">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2" htmlFor="admin-email">
                Administrator Email
              </label>
              <div className="relative">
                <input
                  id="admin-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="faizur544@gmail.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-sm text-white placeholder-slate-500 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2" htmlFor="admin-password">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-sm text-white placeholder-slate-500 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                "Sign In to Dashboard"
              )}
            </button>
          </form>

          {/* Default Credentials Setup Hint */}
          {showDefaultHint && (
            <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-950/30 p-3.5 text-xs text-blue-300">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-blue-200">Default Super Admin Setup:</p>
                  <p className="mt-0.5 text-slate-400">
                    Email: <span className="font-mono text-blue-300">faizur544@gmail.com</span>
                  </p>
                  <p className="text-slate-400">
                    Password: <span className="font-mono text-blue-300">Faizur@7035</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={fillDefaultCredentials}
                  className="rounded-lg bg-blue-600/30 px-2.5 py-1 text-[11px] font-bold text-blue-300 border border-blue-500/40 hover:bg-blue-600 hover:text-white transition shrink-0"
                >
                  Auto Fill
                </button>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-xs font-semibold text-slate-400 transition hover:text-blue-400"
            >
              ← Back to Main Public Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
