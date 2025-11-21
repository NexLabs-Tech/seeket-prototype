import { useState } from "react";
import { Star, MapPin, Calendar, Info, Instagram, Facebook, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import ContactDialog from "../components/ContactDialog";
import ReflectionDialog from "../components/ReflectionDialog";

interface AgencyDetailPageProps {
  agencyId: number;
}

const agencyData = {
  1: {
    name: "NOVASPARK AGENCY",
    location: "Guatemala",
    description: "Somos una agencia experta en campañas que dejan huella.",
    fullDescription: "Nos especializamos en crear estrategias de marketing digital que generan resultados medibles. Con más de 10 años de experiencia, hemos trabajado con más de 200 marcas en Latinoamérica. Nuestro equipo de expertos está dedicado a llevar tu negocio al siguiente nivel.",
    tags: ["SEO", "Branding", "Diseño Web & UX", "Marketing Automation", "Redes"],
    price: 508,
    rating: 4.8,
    totalReviews: 47,
    certifications: ["Google Partner", "Meta Business Partner", "HubSpot Partner"],
    founded: "04/10/2020",
    employees: "24-50",
    services: [
      {
        title: "Identidad Visual",
        description: "Creamos logos, paletas de color y estrategias de campaña de marca premium.",
        price: 750,
      },
      {
        title: "SEO + SEM Starter",
        description: "Estrategias SEO para optimizar tu sitio web y aumentar tu tráfico.",
        price: 650,
      },
      {
        title: "Plan Ecosistema Publicitario",
        description: "Ecosistema de presencia digital para marcas que quieren crecer.",
        price: 455,
      },
    ],
    packages: [
      {
        title: "Paquete Inicial",
        description: "Emprendedores que quieren una identidad visual de calidad por un precio accesible.",
        price: 750,
      },
      {
        title: "SEO + SEM Starter",
        description: "Emprendedores que quieren una estrategia de visibilidad.",
        price: 650,
      },
      {
        title: "Plan Ecosistema Publicitario",
        description: "Ecosistema de presencia digital para marcas.",
        price: 455,
      },
    ],
    portfolio: [
      { title: "Análisis Médico", category: "Branding", color: "from-blue-900 to-blue-700" },
      { title: "Responsive Outlet APP", category: "UX/UI Design", color: "from-pink-500 to-purple-600" },
      { title: "SWAXCOM", category: "Web Design", color: "from-blue-600 to-blue-800" },
      { title: "La Receta: GO!", category: "Branding", color: "from-orange-500 to-red-600" },
      { title: "PetCare v2", category: "App Mobile", color: "from-cyan-400 to-blue-500" },
    ],
    reviews: [
      {
        author: "María García",
        rating: 5,
        date: "Hace 2 meses",
        text: "Excelente trabajo! Transformaron nuestra marca y mejoraron nuestro posicionamiento web. El equipo es muy profesional.",
      },
      {
        author: "Carlos Ramírez",
        rating: 5,
        date: "Hace 3 meses",
        text: "Muy satisfecho con el resultado. La comunicación fue excelente y entregaron a tiempo. Los recomiendo ampliamente.",
      },
      {
        author: "Ana López",
        rating: 4,
        date: "Hace 1 mes",
        text: "Buen servicio, aunque el proceso tomó un poco más de lo esperado. Sin embargo, el resultado final fue excelente.",
      },
      {
        author: "Roberto Chávez",
        rating: 5,
        date: "Hace 4 meses",
        text: "La mejor inversión para mi negocio. Aumentamos nuestras ventas en un 150% después de trabajar con ellos.",
      },
    ],
  },
};

export default function AgencyDetailPage({ agencyId }: AgencyDetailPageProps) {
  const agency = agencyData[agencyId as keyof typeof agencyData] || agencyData[1];
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionData, setReflectionData] = useState({ title: "", question: "" });

  const handleShowReflection = (title: string, question: string) => {
    setReflectionData({ title, question });
    setShowReflection(true);
  };

  return (
    <>
      <ContactDialog
        open={showContactDialog}
        onClose={() => setShowContactDialog(false)}
        agencyName={agency.name}
      />
      <ReflectionDialog
        open={showReflection}
        onClose={() => setShowReflection(false)}
        title={reflectionData.title}
        question={reflectionData.question}
      />
    <section className="bg-gray-50 min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header de la agencia */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Logo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <span className="text-2xl sm:text-3xl">{agency.name.charAt(0)}</span>
              </div>

              {/* Info principal */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl tracking-tight mb-2">{agency.name}</h1>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-500 justify-center sm:justify-start">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{agency.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                        <span className="text-gray-900">{agency.rating}</span>
                        <span>({agency.totalReviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-gray-500 mb-1">Precio desde</p>
                    <p className="text-2xl sm:text-3xl text-gray-900">
                      ${agency.price}
                      <span className="text-gray-500">/m</span>
                    </p>
                    <Button
                      onClick={() => setShowContactDialog(true)}
                      className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-6 sm:px-8 w-full sm:w-auto"
                    >
                      Contactar
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                  {agency.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Certificaciones */}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {agency.certifications.map((cert, index) => (
                    <Badge key={index} className="bg-white border border-gray-300 text-gray-700 rounded-full">
                      ✓ {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Columna izquierda - Información */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Nuestra Visión */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-gray-900">Nuestra Visión</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      handleShowReflection(
                        "Reflexión sobre la Visión",
                        "¿Te parece clara la visión de la agencia? ¿Está alineada con lo que buscas?"
                      )
                    }
                    className="text-orange-500 hover:text-orange-600"
                  >
                    💭 Reflexionar
                  </Button>
                </div>
                <p className="text-gray-600 leading-relaxed">{agency.fullDescription}</p>
              </div>

              {/* Información General */}
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-gray-900 mb-6">Información General</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 mb-1">Certificación</p>
                    <div className="flex items-center gap-2">
                      {agency.certifications.map((cert, index) => (
                        <Star key={index} className="w-4 h-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Creación</p>
                    <p className="text-gray-900">{agency.founded}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Fecha de Publicación</p>
                    <p className="text-gray-900">{agency.founded}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Empleados</p>
                    <p className="text-gray-900">{agency.employees}</p>
                  </div>
                </div>
              </div>

              {/* Servicios */}
              <div className="bg-white rounded-3xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-gray-900">Servicios</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      handleShowReflection(
                        "Reflexión sobre Servicios",
                        "¿Los precios están bien ubicados y comprensibles? ¿Te parece clara la distribución de servicios?"
                      )
                    }
                    className="text-orange-500 hover:text-orange-600"
                  >
                    💭 Reflexionar
                  </Button>
                </div>
                <div className="space-y-3">
                  {agency.services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-2xl hover:border-orange-500 transition-colors">
                      <Info className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl text-gray-900">${service.price}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full border-gray-300"
                          >
                            Ver más
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diseño Web Corporativo */}
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-gray-900 mb-4">Diseño Web Corporativo</h2>
                <p className="text-gray-600 mb-4">
                  Diseñamos páginas web con identidad y potencia en conversión.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Landing Page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Tienda en línea</span>
                  </li>
                </ul>
              </div>

              {/* UX/UI para Plataformas Digitales */}
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-gray-900 mb-4">UX/UI para Plataformas Digitales</h2>
                <p className="text-gray-600">
                  Experiencias de usuario adaptadas para cualquier plataforma de negocio.
                </p>
              </div>

              {/* Consultoría en SEO Técnico */}
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-gray-900 mb-4">Consultoría en SEO Técnico</h2>
                <p className="text-gray-600">
                  Consultoría, auditorías y asesoramiento en SEO técnico.
                </p>
              </div>

              {/* Auditoría de Marketing Digital */}
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-gray-900 mb-4">Auditoría de Marketing Digital</h2>
                <p className="text-gray-600">
                  Evaluamos y mejoramos tus campañas, estrategia y posicionamiento digital.
                </p>
              </div>

              {/* Redes Sociales */}
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-gray-900 mb-6">Redes Sociales</h2>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="flex items-center gap-2 rounded-xl">
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 rounded-xl">
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 rounded-xl">
                    <Send className="w-5 h-5" />
                    TikTok
                  </Button>
                </div>
                
                {/* Portfolio Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {agency.portfolio.map((item, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-xl bg-gradient-to-br ${item.color} p-4 flex flex-col justify-end text-white`}
                    >
                      <p className="text-sm opacity-90">{item.category}</p>
                      <p className="font-medium">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portafolio */}
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-gray-900 mb-6">Portafolio</h2>
                <div className="grid grid-cols-3 gap-4">
                  {agency.portfolio.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div
                        className={`aspect-square rounded-xl bg-gradient-to-br ${item.color} mb-2 group-hover:scale-105 transition-transform`}
                      ></div>
                      <p className="text-gray-900">{item.title}</p>
                      <p className="text-gray-500">{item.category}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reseñas */}
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-gray-900 mb-6">Reseñas</h2>
                <div className="space-y-6">
                  {agency.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <span>{review.author.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="text-gray-900">{review.author}</p>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "fill-orange-500 text-orange-500"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-gray-500 text-sm">{review.date}</span>
                          </div>
                          <p className="text-gray-600">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha - Paquetes */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-gray-900 mb-6">Paquetes</h2>
                <div className="space-y-4">
                  {agency.packages.map((pkg, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:border-orange-500 transition-colors">
                      <h3 className="text-gray-900 mb-2">{pkg.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl text-gray-900">${pkg.price}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full border-gray-300"
                        >
                          Ver más
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
