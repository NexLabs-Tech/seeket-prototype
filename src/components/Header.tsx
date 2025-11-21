import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAuthenticated?: boolean;
  userType?: "user" | "agency" | null;
  onLogout?: () => void;
}

export default function Header({
  currentPage,
  onNavigate,
  isAuthenticated = false,
  userType = null,
  onLogout,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => onNavigate(isAuthenticated && userType === "agency" ? "agency-welcome" : "home")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Logo size="medium" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <button
              onClick={() => onNavigate("marketplace")}
              className="relative pb-1 transition-colors group"
            >
              <span className={`${
                currentPage === "marketplace"
                  ? "text-gray-900"
                  : "text-gray-600 group-hover:text-gray-900"
              }`}>
                Marketplace
              </span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                currentPage === "marketplace" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>

            {!isAuthenticated && (
              <button
                onClick={() => onNavigate("register-agency")}
                className="relative pb-1 transition-colors group"
              >
                <span className={`${
                  currentPage === "register-agency"
                    ? "text-gray-900"
                    : "text-gray-600 group-hover:text-gray-900"
                }`}>
                  Tu Agencia
                </span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                  currentPage === "register-agency" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            )}

            <button
              onClick={() => onNavigate("about")}
              className="relative pb-1 transition-colors group"
            >
              <span className={`${
                currentPage === "about"
                  ? "text-gray-900"
                  : "text-gray-600 group-hover:text-gray-900"
              }`}>
                About
              </span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                currentPage === "about" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>

            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => onNavigate("login")}
                  className="relative pb-1 transition-colors group"
                >
                  <span className={`${
                    currentPage === "login"
                      ? "text-gray-900"
                      : "text-gray-600 group-hover:text-gray-900"
                  }`}>
                    Ingresar
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                    currentPage === "login" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </button>
                <button
                  onClick={() => onNavigate("register")}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-all duration-300 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40"
                >
                  Registrarse
                </button>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 rounded-full"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                      <span className="text-sm">U</span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {userType === "agency" && (
                    <>
                      <DropdownMenuItem onClick={() => onNavigate("agency-welcome")}>
                        Inicio Agencia
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onNavigate("agency-dashboard")}>
                        Panel de Agencia
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem>Mi Perfil</DropdownMenuItem>
                  <DropdownMenuItem>Configuración</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout} className="text-red-600">
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <Logo size="small" />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Menú de navegación principal
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8 px-6">
                <button
                  onClick={() => handleNavigate("marketplace")}
                  className={`text-left py-2 transition-colors ${
                    currentPage === "marketplace"
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Marketplace
                </button>

                {!isAuthenticated && (
                  <button
                    onClick={() => handleNavigate("register-agency")}
                    className={`text-left py-2 transition-colors ${
                      currentPage === "register-agency"
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Tu Agencia
                  </button>
                )}

                <button
                  onClick={() => handleNavigate("about")}
                  className={`text-left py-2 transition-colors ${
                    currentPage === "about"
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  About
                </button>

                {!isAuthenticated ? (
                  <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => handleNavigate("login")}
                      className="w-full py-3 text-left px-4 rounded-full transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Ingresar
                    </button>
                    <button
                      onClick={() => handleNavigate("register")}
                      className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-all duration-300 rounded-full text-center shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40"
                    >
                      Registrarse
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                        <span>U</span>
                      </div>
                      <span className="text-gray-900">Mi Cuenta</span>
                    </div>

                    {userType === "agency" && (
                      <>
                        <button
                          onClick={() => handleNavigate("agency-welcome")}
                          className="text-left py-2 px-4 text-gray-600 hover:text-gray-900"
                        >
                          Inicio Agencia
                        </button>
                        <button
                          onClick={() => handleNavigate("agency-dashboard")}
                          className="text-left py-2 px-4 text-gray-600 hover:text-gray-900"
                        >
                          Panel de Agencia
                        </button>
                      </>
                    )}

                    <button
                      className="text-left py-2 px-4 text-gray-600 hover:text-gray-900"
                    >
                      Mi Perfil
                    </button>

                    <button
                      className="text-left py-2 px-4 text-gray-600 hover:text-gray-900"
                    >
                      Configuración
                    </button>

                    <button
                      onClick={() => {
                        onLogout?.();
                        setMobileMenuOpen(false);
                      }}
                      className="text-left py-2 px-4 text-red-600 hover:text-red-700"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
