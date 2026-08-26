import { useEffect } from "react";
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
        </section>
      </main>
      <Footer compact />
    </div>
  );
}
