import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const agencies = [
  {
    id: 1,
    name: "NOVASPARK AGENCY",
    location: "Guatemala",
    description: "Somos una agencia experta en campañas que dejan huella.",
    tags: ["SEO", "Branding", "Diseño Web & UX", "Marketing Automation", "Redes"],
    price: 508,
    services: ["Diseño Web & UX", "Redes", "Cuarta Web Generativa"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "NEXO STUDIO",
    location: "Guatemala",
    description: "Transformamos tu visión y publicar crear contenido único con tu audiencia.",
    tags: ["SEO", "Branding", "Diseño Web & UX", "Marketing", "Redes"],
    price: 305,
    services: ["SEO", "Branding", "Diseño Web & UX"],
    rating: 4.9,
  },
  {
    id: 3,
    name: "FARO 360°",
    location: "Guatemala",
    description: "Estrategias que te llevarán lo marca. Estrategias inteligentes.",
    tags: ["SEO", "Branding", "Marketing", "Especial"],
    price: 610,
    services: ["SEO", "Estrategia"],
    rating: 4.7,
  },
  {
    id: 4,
    name: "RAÍZ MARKETING",
    location: "El Salvador",
    description: "Desde el campo, tu marca hasta un rendimiento que nuestra mente cambia.",
    tags: ["SEO", "BI", "Automating", "Redes"],
    price: 456,
    services: ["Estrategia", "Diseño Web & UX", "Branding"],
    rating: 4.6,
  },
  {
    id: 5,
    name: "DIGITAL PULSE",
    location: "Guatemala",
    description: "Conectamos con tu audiencia en el momento justo.",
    tags: ["Branding", "UX", "Redes & X", "Emprendedores"],
    price: 406,
    services: ["SEO", "Marketing", "Publicidad"],
    rating: 4.8,
  },
];

interface AgenciesSectionProps {
  onViewAgency: (agencyId: number) => void;
}

export default function AgenciesSection({ onViewAgency }: AgenciesSectionProps) {
  return (
    <section className="bg-gray-50 relative overflow-hidden">
      {/* Burbujas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex gap-8">
          {/* Sidebar con filtros */}
          <aside className="w-64 space-y-6 hidden lg:block">
            <div>
              <label className="block mb-2 text-gray-700">Tipo de Servicio</label>
              <Select>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seo">SEO</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="diseno">Diseño</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Región</label>
              <Select>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latam">Latinoamérica</SelectItem>
                  <SelectItem value="europa">Europa</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block mb-2 text-gray-700">País</label>
              <Select>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gt">Guatemala</SelectItem>
                  <SelectItem value="sv">El Salvador</SelectItem>
                  <SelectItem value="mx">México</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Idioma</label>
              <Select>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="en">Inglés</SelectItem>
                  <SelectItem value="pt">Portugués</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full">
              Aplicar
            </Button>
          </aside>

          {/* Lista de agencias */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-gray-900">Resultados de búsqueda</h2>
              <p className="text-gray-500">Mostrando {agencies.length} agencias</p>
            </div>

            <div className="space-y-4">
              {agencies.map((agency) => (
                <div
                  key={agency.id}
                  onClick={() => onViewAgency(agency.id)}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 cursor-pointer"
                >
                  <div className="flex gap-6">
                    {/* Logo placeholder */}
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{agency.name.charAt(0)}</span>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-gray-900 mb-1">{agency.name}</h3>
                          <p className="text-gray-500">{agency.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500">Precio desde</p>
                          <p className="text-gray-900">
                            ${agency.price}
                            <span className="text-gray-500">/m</span>
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{agency.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {agency.tags.slice(0, 5).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {agency.tags.length > 5 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                            +{agency.tags.length - 5}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-500 mb-2">Servicios</p>
                          <div className="flex flex-wrap gap-2">
                            {agency.services.map((service, index) => (
                              <span
                                key={index}
                                className="text-gray-600"
                              >
                                • {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="rounded-full hover:bg-gray-100"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
