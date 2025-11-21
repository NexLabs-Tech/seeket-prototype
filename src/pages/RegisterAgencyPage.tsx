import { useState } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";

interface RegisterAgencyPageProps {
  onRegister?: () => void;
}

export default function RegisterAgencyPage({ onRegister }: RegisterAgencyPageProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const availableTags = ["SEO", "Branding", "Diseño Web & UX", "Marketing", "Redes Sociales", "Content Marketing", "Email Marketing", "Publicidad Digital"];
  const availableIndustries = ["Tecnología", "Retail", "Salud", "Educación", "Finanzas", "Entretenimiento", "Turismo", "Bienes Raíces", "Alimentos & Bebidas", "Automotriz"];
  const availableLanguages = ["Español", "Inglés", "Portugués", "Francés", "Alemán", "Italiano", "Chino", "Japonés"];

  const addTag = (tag: string) => {
    if (tag && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  const toggleIndustry = (industry: string) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter(i => i !== industry));
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };

  const toggleLanguage = (language: string) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter(l => l !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mb-3 sm:mb-4 px-4">Registra tu Agencia</h1>
            <p className="text-gray-500 px-4">
              Completa el formulario para empezar a ofrecer tus servicios en Seeket
            </p>
          </div>

          <form className="space-y-6 sm:space-y-8">
            {/* Información Básica */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              <h2 className="text-gray-900">Información Básica</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="agencyName" className="block text-gray-700 mb-2">
                    Nombre de la Agencia *
                  </label>
                  <Input
                    id="agencyName"
                    type="text"
                    placeholder="Ej: NOVASPARK AGENCY"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email de Contacto *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contacto@agencia.com"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+502 1234-5678"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-gray-700 mb-2">
                    Sitio Web
                  </label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="www.tuagencia.com"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-gray-700 mb-2">
                  Descripción de la Agencia *
                </label>
                <Textarea
                  id="description"
                  placeholder="Cuéntanos sobre tu agencia, tu experiencia y qué te hace diferente..."
                  rows={4}
                  className="bg-white border-gray-200 rounded-xl resize-none"
                />
              </div>
            </div>

            {/* Ubicación */}
            <div className="bg-gray-50 rounded-3xl p-8 space-y-6">
              <h2 className="text-gray-900">Ubicación</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="region" className="block text-gray-700 mb-2">
                    Región *
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white border-gray-200 rounded-xl">
                      <SelectValue placeholder="Seleccione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latam">Latinoamérica</SelectItem>
                      <SelectItem value="norteamerica">Norteamérica</SelectItem>
                      <SelectItem value="europa">Europa</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="country" className="block text-gray-700 mb-2">
                    País *
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white border-gray-200 rounded-xl">
                      <SelectValue placeholder="Seleccione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gt">Guatemala</SelectItem>
                      <SelectItem value="sv">El Salvador</SelectItem>
                      <SelectItem value="hn">Honduras</SelectItem>
                      <SelectItem value="ni">Nicaragua</SelectItem>
                      <SelectItem value="cr">Costa Rica</SelectItem>
                      <SelectItem value="pa">Panamá</SelectItem>
                      <SelectItem value="mx">México</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-2">
                    Ciudad *
                  </label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Ciudad"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div className="bg-gray-50 rounded-3xl p-8 space-y-6">
              <h2 className="text-gray-900">Servicios y Especialidades</h2>

              <div>
                <label htmlFor="tags" className="block text-gray-700 mb-2">
                  Etiquetas de Servicio *
                </label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      id="tags"
                      type="text"
                      placeholder="Escribe una etiqueta y presiona Enter"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addTag(tagInput);
                        }
                      }}
                      className="bg-white border-gray-200 rounded-xl flex-1"
                    />
                    <Button
                      type="button"
                      onClick={() => addTag(tagInput)}
                      className="bg-gray-900 hover:bg-gray-700 rounded-xl"
                    >
                      Agregar
                    </Button>
                  </div>

                  {/* Tags sugeridos */}
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => addTag(tag)}
                        className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full hover:border-gray-900 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Tags seleccionados */}
                  {selectedTags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="px-3 py-1 bg-gray-900 text-white rounded-full flex items-center gap-2"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="hover:bg-gray-700 rounded-full"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Industrias Especializadas
                </label>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {availableIndustries.map((industry) => (
                      <button
                        key={industry}
                        type="button"
                        onClick={() => toggleIndustry(industry)}
                        className={`px-4 py-2 rounded-full border transition-colors ${
                          selectedIndustries.includes(industry)
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-900'
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                  {selectedIndustries.length > 0 && (
                    <div className="pt-2">
                      <p className="text-sm text-gray-600 mb-2">Seleccionadas: {selectedIndustries.length}</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Idiomas *
                </label>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {availableLanguages.map((language) => (
                      <button
                        key={language}
                        type="button"
                        onClick={() => toggleLanguage(language)}
                        className={`px-4 py-2 rounded-full border transition-colors ${
                          selectedLanguages.includes(language)
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-900'
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                  {selectedLanguages.length > 0 && (
                    <div className="pt-2">
                      <p className="text-sm text-gray-600 mb-2">Seleccionados: {selectedLanguages.length}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Precios */}
            <div className="bg-gray-50 rounded-3xl p-8 space-y-6">
              <h2 className="text-gray-900">Información de Precios</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="minBudget" className="block text-gray-700 mb-2">
                    Presupuesto Mínimo (USD) *
                  </label>
                  <Input
                    id="minBudget"
                    type="number"
                    placeholder="500"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="avgPrice" className="block text-gray-700 mb-2">
                    Precio Promedio Mensual (USD)
                  </label>
                  <Input
                    id="avgPrice"
                    type="number"
                    placeholder="1500"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Logo y Portfolio */}
            <div className="bg-gray-50 rounded-3xl p-8 space-y-6">
              <h2 className="text-gray-900">Multimedia</h2>

              <div>
                <label className="block text-gray-700 mb-2">
                  Logo de la Agencia
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-gray-900 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-1">
                    Arrastra tu logo aquí o haz clic para seleccionar
                  </p>
                  <p className="text-gray-500">PNG, JPG hasta 5MB</p>
                </div>
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-gray-700 mb-2">
                  Link a Portfolio/Trabajo
                </label>
                <Input
                  id="portfolio"
                  type="url"
                  placeholder="https://behance.net/tuagencia"
                  className="bg-white border-gray-200 rounded-xl"
                />
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-gray-50 rounded-3xl p-8 space-y-6">
              <h2 className="text-gray-900">Redes Sociales</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="instagram" className="block text-gray-700 mb-2">
                    Instagram
                  </label>
                  <Input
                    id="instagram"
                    type="url"
                    placeholder="https://instagram.com/tuagencia"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="facebook" className="block text-gray-700 mb-2">
                    Facebook
                  </label>
                  <Input
                    id="facebook"
                    type="url"
                    placeholder="https://facebook.com/tuagencia"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-gray-700 mb-2">
                    LinkedIn
                  </label>
                  <Input
                    id="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/company/tuagencia"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="twitter" className="block text-gray-700 mb-2">
                    Twitter/X
                  </label>
                  <Input
                    id="twitter"
                    type="url"
                    placeholder="https://twitter.com/tuagencia"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="tiktok" className="block text-gray-700 mb-2">
                    TikTok
                  </label>
                  <Input
                    id="tiktok"
                    type="url"
                    placeholder="https://tiktok.com/@tuagencia"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="youtube" className="block text-gray-700 mb-2">
                    YouTube
                  </label>
                  <Input
                    id="youtube"
                    type="url"
                    placeholder="https://youtube.com/@tuagencia"
                    className="bg-white border-gray-200 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex gap-4 justify-end">
              <Button
                type="button"
                variant="outline"
                className="px-8 py-6 rounded-xl border-gray-300"
              >
                Guardar como Borrador
              </Button>
              <Button
                type="button"
                onClick={onRegister}
                className="px-8 py-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                Enviar Solicitud
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
