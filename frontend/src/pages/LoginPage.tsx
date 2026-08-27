import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/forms/LoginForm";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

type LoginPageProps = {
  type: "student" | "teacher";
};

export function LoginPage({ type }: LoginPageProps) {
  const title = type === "student" ? "Student Login" : "Teacher Login";

  useEffect(() => {
    document.title = `${title} - Digital Mozo Institute`;
  }, [title]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f4f4f4]">
      <Header compact />
      <main className="flex grow items-center py-16">
        <section className="mx-auto w-full max-w-[1200px] px-5">
          <h1 className="mb-8 text-center text-3xl font-bold text-[#2c3e50] sm:text-4xl">
            {title}
          </h1>
          <LoginForm type={type} />

          {/* Portal Notice */}
          <div className="mx-auto mt-8 max-w-[500px] rounded-xl border border-blue-200 bg-blue-50 px-6 py-5 text-center">
            <p className="text-sm font-semibold text-blue-800">🎓 Online Student Portal</p>
            <p className="mt-1 text-sm text-blue-700">
              The online portal is being prepared for our upcoming batch. Enrolled students will
              receive their login credentials during orientation.
            </p>
            <Link
              to="/#admissions"
              className="mt-3 inline-block text-sm font-bold text-[#3498db] hover:underline"
            >
              Apply for Admissions →
            </Link>
          </div>
        </section>
      </main>
      <Footer compact />
    </div>
  );
}

