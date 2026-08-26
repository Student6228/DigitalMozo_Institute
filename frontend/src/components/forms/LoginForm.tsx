import { type FormEvent } from "react";
import { fieldClass, primaryButtonClass, secondaryButtonClass } from "../common/styles";

type LoginFormProps = {
  type: "student" | "teacher";
};

export function LoginForm({ type }: LoginFormProps) {
  const isStudent = type === "student";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert(
      isStudent
        ? "Login form submitted! (This is a front-end simulation)"
        : "Teacher login form submitted! (This is a front-end simulation)",
    );
  }

  return (
    <form
      className="mx-auto max-w-[500px] rounded-lg bg-white p-6 shadow-[0_4px_15px_rgba(0,0,0,0.1)] sm:p-10"
      onSubmit={handleSubmit}
    >
      <div className="mb-5">
        <label
          className="block font-bold text-[#555]"
          htmlFor={isStudent ? "username" : "teacher-id"}
        >
          {isStudent ? "Roll Number / Username:" : "Teacher ID / Email:"}
        </label>
        <input
          className={fieldClass}
          type="text"
          id={isStudent ? "username" : "teacher-id"}
          name={isStudent ? "username" : "teacher-id"}
          required
          autoComplete="username"
        />
      </div>
      <div className="mb-5">
        <label className="block font-bold text-[#555]" htmlFor={`${type}-password`}>
          Password:
        </label>
        <input
          className={fieldClass}
          type="password"
          id={`${type}-password`}
          name="password"
          required
          autoComplete="current-password"
        />
      </div>
      <div className="mb-6 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-2 text-[#555]">
          <input className="h-4 w-4 accent-[#3498db]" type="checkbox" name="remember-me" /> Remember
          Me
        </label>
        <a
          className="font-semibold text-[#3498db] hover:underline"
          href="#"
          onClick={(event) => event.preventDefault()}
        >
          Forgot Password?
        </a>
      </div>
      <button
        className={`${isStudent ? primaryButtonClass : secondaryButtonClass} w-full`}
        type="submit"
      >
        Login
      </button>
      <p className="mt-5 text-center text-sm text-[#666]">
        {isStudent ? (
          <>
            Don't have an account?{" "}
            <a
              className="font-semibold text-[#3498db] hover:underline"
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Register Now
            </a>
          </>
        ) : (
          "For account issues, please contact administration."
        )}
      </p>
    </form>
  );
}
