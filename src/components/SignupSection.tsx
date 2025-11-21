import { Users, UserCircle, Heart, Upload, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SignupSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Únete a Seeket */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight mb-4">Únete a Seeket</h2>
              <p className="text-gray-500">
                Elige el tipo de cuenta con el que quieres registrarte
              </p>
            </div>

            <div className="space-y-6">
              <button className="w-full p-6 border-2 border-gray-200 rounded-3xl hover:border-gray-900 transition-all text-left group">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                    <Users className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">Agencia</h3>
                    <p className="text-gray-500">
                      Quiero ofrecer mis servicios como agencia en Seeket
                    </p>
                  </div>
                </div>
              </button>

              <button className="w-full p-6 border-2 border-gray-200 rounded-3xl hover:border-gray-900 transition-all text-left group">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                    <UserCircle className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">Usuario</h3>
                    <p className="text-gray-500">
                      Estoy buscando una agencia que me ayude con mi proyecto
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Crea tu cuenta */}
          <div className="relative">
            {/* Burbujas decorativas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-40"></div>
              <div className="absolute top-8 right-20 w-32 h-32 bg-gradient-to-br from-red-300 to-orange-300 rounded-full opacity-30"></div>
              <div className="absolute top-16 right-32 w-20 h-20 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-40"></div>
              <div className="absolute bottom-0 right-8 w-28 h-28 bg-gradient-to-br from-red-200 to-orange-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-12 right-28 w-16 h-16 bg-gradient-to-br from-orange-200 to-red-300 rounded-full opacity-50"></div>
              
              {/* Círculos con iconos */}
              <div className="absolute top-12 right-10 w-28 h-28 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-12 h-12 text-white" fill="white" />
              </div>
              <div className="absolute top-32 right-4 w-24 h-24 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <div className="absolute bottom-8 right-16 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                <Send className="w-14 h-14 text-white" />
              </div>
            </div>

            {/* Formulario */}
            <div className="relative bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-sm">
              <h2 className="text-3xl tracking-tight mb-6 text-center">Crea tu cuenta</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    className="bg-gray-50 border-gray-200 rounded-xl py-6"
                  />
                </div>

                <div>
                  <label htmlFor="username" className="block text-gray-700 mb-2">
                    Apellido
                  </label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Ingresa tu username"
                    className="bg-gray-50 border-gray-200 rounded-xl py-6"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 py-6 rounded-xl">
                  Continuar
                </Button>

                <p className="text-center text-gray-500">
                  ¿Ya tienes una cuenta?{" "}
                  <a href="#" className="text-gray-900 hover:underline">
                    Inicia sesión
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
