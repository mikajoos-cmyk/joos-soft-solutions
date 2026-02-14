import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import { ContentProvider } from "@/contexts/ContentContext";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { PortfolioDetailPage } from "@/pages/PortfolioDetailPage";
import { ContactPage } from "@/pages/ContactPage";
import { ImpressumPage } from "@/pages/ImpressumPage";
import { AdminLoginPage } from "@/pages/AdminLoginPage";
import { AdminDashboardPage } from "@/pages/AdminDashboardPage";

export const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ContentProvider>
          <Router>
            <Routes>
              {/* Admin Routes - No Header/Footer */}
              <Route path="/admin" element={<AdminLoginPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              
              {/* Public Routes - With Header/Footer */}
              <Route path="/*" element={
                <div className="text-gray-800 text-base not-italic normal-nums font-normal accent-auto bg-slate-50 box-border caret-transparent tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/portfolio" element={<PortfolioPage />} />
                      <Route path="/portfolio/:projectId" element={<PortfolioDetailPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/impressum" element={<ImpressumPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              } />
            </Routes>
          </Router>
        </ContentProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};
