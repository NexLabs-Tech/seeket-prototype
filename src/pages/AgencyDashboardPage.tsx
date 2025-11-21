import { Info, Star, Calendar, Instagram, Facebook, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export default function AgencyDashboardPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="perfil" className="w-full">
            <TabsList className="bg-white rounded-full p-1 mb-6 sm:mb-8 inline-flex w-full sm:w-auto overflow-x-auto">
              <TabsTrigger value="perfil" className="rounded-full px-4 sm:px-8">
                Perfil
              </TabsTrigger>
              <TabsTrigger value="estadisticas" className="rounded-full px-4 sm:px-8">
                Estadísticas
              </TabsTrigger>
              <TabsTrigger value="facturacion" className="rounded-full px-4 sm:px-8">
                Facturación
              </TabsTrigger>
            </TabsList>

            {/* Tab de Perfil */}
            <TabsContent value="perfil" className="space-y-4 sm:space-y-6">
              {/* Header de la agencia */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Logo */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <span className="text-2xl sm:text-3xl">N</span>
                  </div>

                  {/* Info principal */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl tracking-tight mb-2">NOVASPARK AGENCY</h1>
                        <div className="flex items-center gap-3 sm:gap-4 text-gray-500 justify-center sm:justify-start">
                          <span>📍 Guatemala</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                            <span className="text-gray-900">4.8</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center sm:text-right">
                        <p className="text-gray-500 mb-1">Precio desde</p>
                        <p className="text-2xl sm:text-3xl text-gray-900">
                          $508<span className="text-gray-500">/m</span>
                        </p>
                        <Button className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-6 sm:px-8 w-full sm:w-auto">
                          Contactar
                        </Button>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["SEO", "Branding", "Diseño Web & UX", "Marketing", "Redes"].map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Certificaciones */}
                    <div className="flex flex-wrap gap-2">
                      {["Google Partner", "Meta Business Partner"].map((cert, index) => (
                        <Badge key={index} className="bg-white border border-gray-300 text-gray-700 rounded-full">
                          ✓ {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Columna izquierda */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                  {/* Nuestra Visión */}
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-gray-900">Nuestra Visión</h2>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Editar
                      </Button>
                    </div>
                    <Textarea
                      placeholder="Describe tu agencia, experiencia y qué te hace diferente..."
                      className="bg-gray-50 border-gray-200 rounded-xl resize-none"
                      rows={4}
                      defaultValue="Nos especializamos en crear estrategias de marketing digital que generan resultados medibles. Con más de 10 años de experiencia, hemos trabajado con más de 200 marcas en Latinoamérica."
                    />
                  </div>

                  {/* Información General */}
                  <div className="bg-white rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-gray-900">Información General</h2>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Editar
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-500 mb-2">Certificación</label>
                        <div className="flex items-center gap-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-500 mb-2">Creación</label>
                        <Input
                          type="text"
                          defaultValue="04/10/2020"
                          className="bg-gray-50 border-gray-200 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-500 mb-2">Fecha de Publicación</label>
                        <Input
                          type="text"
                          defaultValue="04/10/2020"
                          className="bg-gray-50 border-gray-200 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-500 mb-2">Empleados</label>
                        <Input
                          type="text"
                          defaultValue="24-50"
                          className="bg-gray-50 border-gray-200 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Servicios */}
                  <div className="bg-white rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-gray-900">Servicios</h2>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Editar
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {[
                        { description: "Creamos logos, paletas de color y estrategias de campaña", price: 850 },
                        { description: "Estrategias SEO para optimizar tu sitio web", price: 1200 },
                        { description: "Ecosistema de presencia digital para marcas", price: 2500 },
                      ].map((service, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-2xl hover:border-orange-500 transition-colors">
                          <Info className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xl text-gray-900">${service.price}</span>
                              <Button size="sm" variant="outline" className="rounded-full">
                                Editar
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Diseño Web Corporativo */}
                  <div className="bg-white rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-gray-900">Diseño Web Corporativo</h2>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Editar
                      </Button>
                    </div>
                    <Textarea
                      className="bg-gray-50 border-gray-200 rounded-xl resize-none mb-4"
                      rows={2}
                      defaultValue="Diseñamos páginas web con identidad y potencia en conversión."
                    />
                    <div className="space-y-2">
                      <Input
                        defaultValue="• Landing Page"
                        className="bg-gray-50 border-gray-200 rounded-xl"
                      />
                      <Input
                        defaultValue="• Tienda en línea"
                        className="bg-gray-50 border-gray-200 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* UX/UI para Plataformas Digitales */}
                  <div className="bg-white rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-gray-900">UX/UI para Plataformas Digitales</h2>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Editar
                      </Button>
                    </div>
                    <Textarea
                      className="bg-gray-50 border-gray-200 rounded-xl resize-none"
                      rows={2}
                      defaultValue="Experiencias de usuario adaptadas para cualquier plataforma de negocio."
                    />
                  </div>

                  {/* Consultoría en SEO Técnico */}
                  <div className="bg-white rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-gray-900">Consultoría en SEO Técnico</h2>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Editar
                      </Button>
                    </div>
                    <Textarea
                      className="bg-gray-50 border-gray-200 rounded-xl resize-none"
                      rows={2}
                      defaultValue="Consultoría, auditorías y asesoramiento en SEO técnico."
                    />
                  </div>

                  {/* Auditoría de Marketing Digital */}
                  <div className="bg-white rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-gray-900">Auditoría de Marketing Digital</h2>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Editar
                      </Button>
                    </div>
                    <Textarea
                      className="bg-gray-50 border-gray-200 rounded-xl resize-none"
                      rows={2}
                      defaultValue="Evaluamos y mejoramos tus campañas, estrategia y posicionamiento digital."
                    />
                  </div>

                  {/* Portafolio */}
                  <div className="bg-white rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-gray-900">Portafolio</h2>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Editar
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { title: "Análisis Médico", color: "from-blue-900 to-blue-700" },
                        { title: "Responsive Outlet", color: "from-pink-500 to-purple-600" },
                        { title: "SWAXCOM", color: "from-blue-600 to-blue-800" },
                        { title: "La Receta: GO!", color: "from-orange-500 to-red-600" },
                        { title: "PetCare v2", color: "from-cyan-400 to-blue-500" },
                      ].map((item, index) => (
                        <div key={index}>
                          <div
                            className={`aspect-square rounded-xl bg-gradient-to-br ${item.color} mb-2`}
                          ></div>
                          <p className="text-gray-900 text-sm">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reseñas */}
                  <div className="bg-white rounded-3xl p-8">
                    <h2 className="text-gray-900 mb-6">Reseñas</h2>
                    <div className="space-y-6">
                      {[
                        {
                          author: "María García",
                          rating: 5,
                          text: "Excelente trabajo! Transformaron nuestra marca completamente.",
                        },
                        {
                          author: "Carlos Ramírez",
                          rating: 5,
                          text: "Muy profesionales y entregaron a tiempo. Los recomiendo ampliamente.",
                        },
                      ].map((review, index) => (
                        <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <span>{review.author.charAt(0)}</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-900 mb-1">{review.author}</p>
                              <div className="flex items-center gap-1 mb-2">
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
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-gray-900">Paquetes</h2>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Editar
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Paquete Inicial",
                          description: "Emprendedores que quieren identidad visual",
                          price: 750,
                        },
                        {
                          title: "SEO + SEM Starter",
                          description: "Estrategia de visibilidad completa",
                          price: 650,
                        },
                        {
                          title: "Plan Ecosistema",
                          description: "Presencia digital para marcas",
                          price: 455,
                        },
                      ].map((pkg, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-2xl p-6 hover:border-orange-500 transition-colors"
                        >
                          <h3 className="text-gray-900 mb-2">{pkg.title}</h3>
                          <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl text-gray-900">${pkg.price}</span>
                            <Button size="sm" variant="outline" className="rounded-full">
                              Editar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Redes Sociales */}
                  <div className="bg-white rounded-3xl p-8">
                    <h2 className="text-gray-900 mb-6">Redes Sociales</h2>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Instagram className="w-5 h-5 text-gray-400" />
                        <Input
                          placeholder="Instagram URL"
                          className="bg-gray-50 border-gray-200 rounded-xl"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Facebook className="w-5 h-5 text-gray-400" />
                        <Input
                          placeholder="Facebook URL"
                          className="bg-gray-50 border-gray-200 rounded-xl"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5 text-gray-400" />
                        <Input
                          placeholder="TikTok URL"
                          className="bg-gray-50 border-gray-200 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline" className="px-8 py-6 rounded-xl">
                  Cancelar
                </Button>
                <Button className="px-8 py-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Guardar Cambios
                </Button>
              </div>
            </TabsContent>

            {/* Tab de Estadísticas */}
            <TabsContent value="estadisticas">
              <div className="bg-white rounded-3xl p-8">
                <h2 className="text-2xl tracking-tight mb-8">Estadísticas</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                    <p className="text-blue-600 mb-2">Vistas del Perfil</p>
                    <p className="text-3xl text-blue-900">2,547</p>
                    <p className="text-blue-600 text-sm">+12% este mes</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                    <p className="text-green-600 mb-2">Contactos Recibidos</p>
                    <p className="text-3xl text-green-900">156</p>
                    <p className="text-green-600 text-sm">+8% este mes</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                    <p className="text-orange-600 mb-2">Calificación Promedio</p>
                    <div className="flex items-center gap-2">
                      <p className="text-3xl text-orange-900">4.8</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-orange-600 text-sm">47 reseñas</p>
                  </div>
                </div>

                {/* Gráficos placeholder */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 h-64 flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de Vistas por Mes</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 h-64 flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de Conversiones</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab de Facturación */}
            <TabsContent value="facturacion">
              <div className="space-y-6">
                {/* Plan Actual */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl tracking-tight mb-2">Plan Actual: Premium</h2>
                      <p className="text-gray-600">
                        Acceso completo a todas las funcionalidades de Seeket
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl tracking-tight mb-1">$20</p>
                      <p className="text-gray-600">/mes</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/50 rounded-xl p-4">
                      <p className="text-gray-600 mb-1">Próximo cobro</p>
                      <p className="text-gray-900">15 Nov 2025</p>
                    </div>
                    <div className="bg-white/50 rounded-xl p-4">
                      <p className="text-gray-600 mb-1">Estado</p>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Activo
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>✓ Visibilidad en el directorio de Seeket</p>
                    <p>✓ Acceso al panel de métricas y analítica</p>
                    <p>✓ Sistema de reseñas y calificaciones</p>
                    <p>✓ Gestión completa de perfil y servicios</p>
                    <p>✓ Contacto directo con clientes potenciales</p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8">
                  <h2 className="text-2xl tracking-tight mb-6">Métodos de Pago</h2>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-2xl p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <span className="text-blue-600">💳</span>
                        </div>
                        <div>
                          <p className="text-gray-900">Visa •••• 4242</p>
                          <p className="text-gray-500 text-sm">Expira 12/25</p>
                        </div>
                      </div>
                      <Button variant="outline" className="rounded-xl">
                        Editar
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full py-6 rounded-xl border-dashed">
                      + Agregar Método de Pago
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8">
                  <h2 className="text-2xl tracking-tight mb-6">Información de Facturación</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Nombre Fiscal</label>
                      <Input
                        defaultValue="NOVASPARK AGENCY S.A."
                        className="bg-gray-50 border-gray-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">NIT / RFC</label>
                      <Input
                        defaultValue="123456789-0"
                        className="bg-gray-50 border-gray-200 rounded-xl"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">Dirección Fiscal</label>
                      <Input
                        defaultValue="Zona 10, Ciudad de Guatemala"
                        className="bg-gray-50 border-gray-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email de Facturación</label>
                      <Input
                        defaultValue="facturacion@novaspark.com"
                        className="bg-gray-50 border-gray-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Teléfono</label>
                      <Input
                        defaultValue="+502 1234-5678"
                        className="bg-gray-50 border-gray-200 rounded-xl"
                      />
                    </div>
                  </div>
                  <Button className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl">
                    Guardar Información
                  </Button>
                </div>

                <div className="bg-white rounded-3xl p-8">
                  <h2 className="text-2xl tracking-tight mb-6">Historial de Facturación</h2>
                  <div className="space-y-4">
                    {[
                      { id: "INV-001", date: "15 Oct 2025", amount: 20, status: "Pagado" },
                      { id: "INV-002", date: "15 Sep 2025", amount: 20, status: "Pagado" },
                      { id: "INV-003", date: "15 Ago 2025", amount: 20, status: "Pagado" },
                    ].map((invoice, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-2xl p-6 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-6">
                          <div>
                            <p className="text-gray-900">{invoice.id}</p>
                            <p className="text-gray-500 text-sm">{invoice.date}</p>
                          </div>
                          <div>
                            <p className="text-gray-900">${invoice.amount}</p>
                            <span className="text-green-600 text-sm">{invoice.status}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-xl">
                          Descargar PDF
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
