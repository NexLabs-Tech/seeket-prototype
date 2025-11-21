import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RegisterAgencyPage from "./pages/RegisterAgencyPage";
import MarketplacePage from "./pages/MarketplacePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AgencyDetailPage from "./pages/AgencyDetailPage";
import AgencyDashboardPage from "./pages/AgencyDashboardPage";
import AgencyWelcomePage from "./pages/AgencyWelcomePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<"user" | "agency" | null>(null);
  const [selectedAgencyId, setSelectedAgencyId] = useState<number>(1);
  const [agencyName, setAgencyName] = useState("NOVASPARK AGENCY");

  const handleLogin = (type: "user" | "agency") => {
    setIsAuthenticated(true);
    setUserType(type);
    // Si intentó ver una agencia antes de loguearse, redirigir allá
    if (selectedAgencyId && type === "user") {
      setCurrentPage("agency-detail");
    } else if (type === "agency") {
      setCurrentPage("agency-welcome");
    } else {
      setCurrentPage("home");
    }
  };

  const handleRegisterUser = () => {
    setIsAuthenticated(true);
    setUserType("user");
    setCurrentPage("marketplace");
  };

  const handleRegisterAgency = () => {
    setIsAuthenticated(true);
    setUserType("agency");
    setCurrentPage("agency-dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setCurrentPage("home");
  };

  const handleViewAgency = (agencyId: number) => {
    setSelectedAgencyId(agencyId);
    if (!isAuthenticated) {
      // Redirigir a login si no está autenticado
      setCurrentPage("login");
    } else {
      setCurrentPage("agency-detail");
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "register-agency":
        return <RegisterAgencyPage onRegister={handleRegisterAgency} />;
      case "marketplace":
        return <MarketplacePage onViewAgency={handleViewAgency} />;
      case "about":
        return <AboutPage onNavigate={setCurrentPage} />;
      case "login":
        return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case "register":
        return <RegisterPage onRegister={(type) => type === "user" ? handleRegisterUser() : handleRegisterAgency()} onNavigate={setCurrentPage} />;
      case "agency-detail":
        return <AgencyDetailPage agencyId={selectedAgencyId} />;
      case "agency-welcome":
        return <AgencyWelcomePage agencyName={agencyName} onNavigate={setCurrentPage} />;
      case "agency-dashboard":
        return <AgencyDashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isAuthenticated={isAuthenticated}
        userType={userType}
        onLogout={handleLogout}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}
