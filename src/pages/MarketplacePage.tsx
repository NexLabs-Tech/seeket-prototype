import { ChevronRight, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

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
  {
    id: 6,
    name: "CREATIVE MINDS",
    location: "Costa Rica",
    description: "Ideas creativas que transforman negocios en marcas memorables.",
    tags: ["Branding", "Content", "Social Media", "Video"],
    price: 720,
    services: ["Branding", "Contenido", "Video Marketing"],
    rating: 4.9,
  },
  {
    id: 7,
    name: "GROWTH LAB",
    location: "México",
    description: "Especialistas en crecimiento digital y estrategias de performance.",
    tags: ["SEO", "SEM", "Analytics", "Growth Hacking"],
    price: 890,
    services: ["SEO", "SEM", "Analytics"],
    rating: 4.7,
  },
  {
    id: 8,
    name: "PIXEL PERFECT",
    location: "Honduras",
    description: "Diseño y desarrollo web de alta calidad para marcas exigentes.",
    tags: ["Diseño Web", "UX/UI", "E-commerce", "Apps"],
    price: 650,
    services: ["Diseño Web", "UX/UI", "Desarrollo"],
    rating: 4.8,
  },
];

interface MarketplacePageProps {
  onViewAgency: (agencyId: number) => void;
}

export default function MarketplacePage({ onViewAgency }: MarketplacePageProps) {
  return (
    <section className="bg-gray-50 relative overflow-hidden min-h-screen">
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

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        {/* Header del marketplace */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mb-3 sm:mb-4">
            Explora Nuestro{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Marketplace
            </span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto px-4">
            Descubre las mejores agencias verificadas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        {/* Barra de búsqueda */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar agencias..."
                className="pl-12 sm:pl-14 pr-4 sm:pr-5 py-5 sm:py-7 rounded-full border-gray-200 focus:border-gray-900 bg-white w-full"
              />
            </div>
            <Button className="px-8 sm:px-10 py-5 sm:py-7 rounded-full bg-gray-900 hover:bg-gray-700 whitespace-nowrap">
              Buscar
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar con filtros */}
          <aside className="w-64 space-y-6 hidden lg:block">
            <div className="bg-white rounded-2xl p-6 space-y-6">
              <h3 className="text-gray-900">Filtros</h3>

              <div>
                <label className="block mb-2 text-gray-700">Tipo de Servicio</label>
                <Select>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                    <SelectItem value="diseno">Diseño Web</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Región</label>
                <Select>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                    <SelectValue placeholder="Todas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="latam">Latinoamérica</SelectItem>
                    <SelectItem value="europa">Europa</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">País</label>
                <Select>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="gt">Guatemala</SelectItem>
                    <SelectItem value="sv">El Salvador</SelectItem>
                    <SelectItem value="mx">México</SelectItem>
                    <SelectItem value="cr">Costa Rica</SelectItem>
                    <SelectItem value="hn">Honduras</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Presupuesto</label>
                <Select>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                    <SelectValue placeholder="Cualquiera" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Cualquiera</SelectItem>
                    <SelectItem value="1">Menos de $500</SelectItem>
                    <SelectItem value="2">$500 - $1,000</SelectItem>
                    <SelectItem value="3">$1,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Calificación</label>
                <Select>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                    <SelectValue placeholder="Todas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="5">5 estrellas</SelectItem>
                    <SelectItem value="4">4+ estrellas</SelectItem>
                    <SelectItem value="3">3+ estrellas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full">
                Aplicar Filtros
              </Button>
            </div>
          </aside>

          {/* Lista de agencias */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-gray-900">Todas las Agencias</h2>
                  <p className="text-gray-500">Mostrando {agencies.length} resultados</p>
                </div>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-full sm:w-48 bg-white border-gray-200 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Más Relevantes</SelectItem>
                    <SelectItem value="rating">Mejor Calificados</SelectItem>
                    <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {agencies.map((agency) => (
                <div
                  key={agency.id}
                  onClick={() => onViewAgency(agency.id)}
                  className="bg-white rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:border-orange-200 group"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Logo placeholder */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300 group-hover:scale-105">
                      <span className="text-xl sm:text-2xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-semibold">{agency.name.charAt(0)}</span>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                        <div className="text-center sm:text-left">
                          <h3 className="text-gray-900 mb-1">{agency.name}</h3>
                          <p className="text-gray-500">{agency.location}</p>
                        </div>
                        <div className="text-center sm:text-right">
                          <p className="text-gray-500">Precio desde</p>
                          <p className="text-gray-900">
                            ${agency.price}
                            <span className="text-gray-500">/m</span>
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 text-center sm:text-left">{agency.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                        {agency.tags.slice(0, 5).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                          <p className="text-gray-500 mb-2">Servicios</p>
                          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            {agency.services.map((service, index) => (
                              <span key={index} className="text-gray-600 text-sm">
                                • {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="rounded-full hover:bg-gray-100 mx-auto sm:mx-0"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center gap-2 mt-8 sm:mt-12">
              <Button variant="outline" className="rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base">
                Anterior
              </Button>
              <Button className="rounded-full px-3 sm:px-4 py-2 bg-gray-900 hover:bg-gray-700 text-sm sm:text-base">
                1
              </Button>
              <Button variant="outline" className="rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base">
                2
              </Button>
              <Button variant="outline" className="rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base">
                3
              </Button>
              <Button variant="outline" className="rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base">
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
