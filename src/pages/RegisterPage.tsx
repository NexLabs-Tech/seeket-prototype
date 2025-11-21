import { Eye, EyeOff, Users, UserCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import QuoteCarousel from "../components/QuoteCarousel";
import Logo from "../components/Logo";

interface RegisterPageProps {
  onRegister: (type: "user" | "agency") => void;
  onNavigate?: (page: string) => void;
}

export default function RegisterPage({ onRegister, onNavigate }: RegisterPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState<"agency" | "user" | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountType) {
      onRegister(accountType);
    }
  };

  if (!accountType) {
    return (
      <section className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left side - Quote Section with Gradient */}
            <div className="hidden lg:block relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-700/20 rounded-full blur-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full">
                <div className="p-8">
                  <Logo size="medium" className="brightness-0 invert" />
                </div>
                <QuoteCarousel />
              </div>
            </div>

            {/* Right side - Account Type Selection */}
            <div className="flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="w-full max-w-md">
                {/* Logo for mobile */}
                <div className="lg:hidden mb-8 flex justify-center">
                  <Logo size="medium" />
                </div>

                <div className="text-center mb-10">
                  <h1 className="text-3xl md:text-4xl tracking-tight mb-3">
                    Únete a Seeket
                  </h1>
                  <p className="text-gray-500">
                    Elige el tipo de cuenta que deseas crear
                  </p>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => onNavigate?.("register-agency")}
                    className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-orange-500 hover:shadow-lg transition-all text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-red-200 transition-all">
                        <Users className="w-8 h-8 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-1">Soy una Agencia</h3>
                        <p className="text-gray-600 text-sm">
                          Quiero ofrecer mis servicios en Seeket
                        </p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setAccountType("user")}
                    className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-orange-500 hover:shadow-lg transition-all text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-red-200 transition-all">
                        <UserCircle className="w-8 h-8 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-1">Soy un Cliente</h3>
                        <p className="text-gray-600 text-sm">
                          Quiero contratar servicios de agencias
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-8">
                  ¿Ya tienes una cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate?.("login")}
                    className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    Inicia sesión aquí
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left side - Quote Section with Gradient */}
          <div className="hidden lg:block relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-700/20 rounded-full blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full">
              <div className="p-8">
                <Logo size="medium" className="brightness-0 invert" />
              </div>
              <QuoteCarousel />
            </div>
          </div>

          {/* Right side - Register Form */}
          <div className="flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="w-full max-w-md">
              {/* Logo for mobile */}
              <div className="lg:hidden mb-8 flex justify-center">
                <Logo size="medium" />
              </div>

              <div className="mb-6">
                <button
                  onClick={() => setAccountType(null)}
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 mb-6"
                >
                  ← Volver
                </button>
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl tracking-tight mb-3">
                    Crea tu cuenta
                  </h1>
                  <p className="text-gray-500">
                    {accountType === "agency"
                      ? "Comienza a ofrecer tus servicios"
                      : "Encuentra la agencia perfecta"}
                  </p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="bg-gray-50 border-gray-200 rounded-xl py-6"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-gray-50 border-gray-200 rounded-xl py-6"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-gray-50 border-gray-200 rounded-xl py-6 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
                    Confirmar Contraseña
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-gray-50 border-gray-200 rounded-xl py-6 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="terms" className="mt-1" />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-600 cursor-pointer leading-relaxed"
                  >
                    Acepto los{" "}
                    <a href="#" className="text-orange-600 hover:text-orange-700">
                      Términos y Condiciones
                    </a>{" "}
                    y la{" "}
                    <a href="#" className="text-orange-600 hover:text-orange-700">
                      Política de Privacidad
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40"
                >
                  Crear Cuenta
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-4 text-gray-500">o regístrate con</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="py-6 rounded-xl border-gray-200 hover:bg-gray-50 hover:border-orange-300 transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC04"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="py-6 rounded-xl border-gray-200 hover:bg-gray-50 hover:border-orange-300 transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  </Button>
                </div>

                <p className="text-center text-sm text-gray-600 pt-4">
                  ¿Ya tienes una cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate?.("login")}
                    className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    Inicia sesión aquí
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
