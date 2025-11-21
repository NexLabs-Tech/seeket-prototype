import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-orange-50/20 to-red-50/30 border-t border-gray-100">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 md:gap-20">
          <div className="space-y-6">
            <div className="h-12 flex items-center">
              <Logo size="medium" />
            </div>

            <div>
              <h3 className="mb-4 text-gray-900 font-['Poppins',sans-serif]">
                Preguntas Frecuentes
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    ¿Cómo me afilio a Seeket?
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    ¿Qué pasa si no encuentro lo que busco?
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    ¿Cuáles son los requisitos para registrar mi
                    agencia?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="mb-4 text-gray-900 font-['Poppins',sans-serif]">Contacto</h3>
            <div className="space-y-3 text-gray-600">
              <p>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Soporte
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Dirección
                </a>
              </p>
            </div>

            <div className="pt-8">
              <h3 className="mb-4 text-gray-900 font-['Poppins',sans-serif]">Redes</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a
                    href="https://www.instagram.com/seeket_ai?igsh=ZjNhZTJ3dGFhODVk"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-gray-900 font-['Poppins',sans-serif]">Contáctanos</h3>
            <form className="space-y-4">
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Correo Electrónico"
                  className="bg-gray-50 border-gray-200 placeholder:text-gray-400 rounded-full py-6 font-['Poppins',sans-serif]"
                />
              </div>

              <div>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Asunto"
                  className="bg-gray-50 border-gray-200 placeholder:text-gray-400 rounded-full py-6 font-['Poppins',sans-serif]"
                />
              </div>

              <div>
                <Textarea
                  id="message"
                  placeholder="Comentario"
                  rows={4}
                  className="bg-gray-50 border-gray-200 placeholder:text-gray-400 rounded-3xl resize-none font-['Poppins',sans-serif]"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 rounded-full font-['Poppins',sans-serif] shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}