import { Target, Users, Shield, Zap } from "lucide-react";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 sm:mb-6">
            Sobre{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Seeket
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4">
            Somos la plataforma que conecta empresas con las mejores agencias de marketing digital
            en Latinoamérica. Nuestra misión es simplificar el proceso de encontrar el socio
            perfecto para impulsar tu negocio.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl tracking-tight mb-3 sm:mb-4">Nuestros Valores</h2>
            <p className="text-gray-500 max-w-2xl mx-auto px-4">
              Los principios que guían cada decisión que tomamos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-gray-900 mb-3">Precisión</h3>
              <p className="text-gray-600">
                Conectamos negocios con agencias que realmente se ajustan a sus necesidades
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-gray-900 mb-3">Comunidad</h3>
              <p className="text-gray-600">
                Construimos una red de profesionales comprometidos con la excelencia
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-gray-900 mb-3">Confianza</h3>
              <p className="text-gray-600">
                Todas nuestras agencias son verificadas para garantizar calidad y profesionalismo
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-gray-900 mb-3">Eficiencia</h3>
              <p className="text-gray-600">
                Ahorramos tiempo y recursos al simplificar el proceso de búsqueda
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nuestra Historia */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl tracking-tight mb-4 sm:mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Seeket nació de una necesidad clara: facilitar la conexión entre empresas que
                  buscan crecer y las agencias especializadas que pueden ayudarlas.
                </p>
                <p>
                  En 2024, un grupo de emprendedores y expertos en marketing digital se unieron con
                  una visión: crear un marketplace transparente, eficiente y confiable donde las
                  empresas pudieran encontrar a su socio ideal.
                </p>
                <p>
                  Hoy, conectamos a cientos de empresas con agencias verificadas en toda
                  Latinoamérica, facilitando colaboraciones exitosas y duraderas.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-gray-700 text-lg">
                    Impulsando el crecimiento de negocios en toda Latinoamérica
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-gray-600">Agencias Verificadas</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                1,200+
              </div>
              <p className="text-gray-600">Proyectos Exitosos</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-gray-600">Países</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl tracking-tight mb-4 sm:mb-6">¿Listo para crecer?</h2>
          <p className="text-gray-600 mb-6 sm:mb-8 px-4">
            Únete a nuestra comunidad y encuentra la agencia perfecta para tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button 
              onClick={() => onNavigate?.("marketplace")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full transition-all"
            >
              Buscar Agencias
            </button>
            <button 
              onClick={() => onNavigate?.("register-agency")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-full transition-all hover:border-orange-300"
            >
              Registrar mi Agencia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
