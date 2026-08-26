import { Link } from "react-router-dom";
import { primaryButtonClass } from "../components/common/styles";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f4f4f4]">
      <Header compact />
      <main className="grid grow place-items-center px-5 py-16 text-center">
        <div>
          <p className="text-lg font-bold text-[#3498db]">404</p>
          <h1 className="mt-2 text-4xl font-bold text-[#2c3e50]">Page Not Found</h1>
          <p className="mt-4 text-[#555]">The page you requested is not available.</p>
          <Link className={`${primaryButtonClass} mt-7`} to="/">
            Return Home
          </Link>
        </div>
      </main>
      <Footer compact />
    </div>
  );
}
