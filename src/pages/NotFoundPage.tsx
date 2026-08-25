import { Link } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Home, ArrowRight } from "lucide-react";

export const NotFoundPage = () => (
  <>
    <SEOHead
      title="Page Not Found | Alpha Academy"
      description="The page you are looking for does not exist. Return to Alpha Academy's homepage for UGC NET English Literature coaching in Coimbatore."
      canonical="https://www.tnalphaacademy.in/404"
    />
    <main className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="font-serif text-8xl font-bold text-[#EAE5DC] mb-4">404</div>
        <h1 className="font-serif text-3xl font-bold text-[#121316] mb-3">Page Not Found</h1>
        <p className="text-slate-600 text-base mb-8">
          The page you are looking for doesn't exist or has been moved. Return to the homepage to explore Alpha Academy's UGC NET English Literature coaching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#121316] text-white font-bold text-sm hover:bg-black transition-colors">
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link to="/blog" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border-2 border-[#121316] text-[#121316] font-bold text-sm hover:bg-[#121316] hover:text-white transition-all">
            Browse Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  </>
);
