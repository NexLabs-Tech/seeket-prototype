import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleSearch = () => {
    if (onNavigate) {
      onNavigate("marketplace");
    }
  };
  return (
    <section className="relative bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-red-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-['Poppins',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight px-4">
              Encuentra la{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent font-semibold">
                  mejor agencia
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-50"></span>
              </span>
              <br />
              para tu negocio
            </h2>
            
            <p className="font-['Poppins',sans-serif] text-gray-600 max-w-xl mx-auto px-4 text-lg">
              Accede a servicios verificados para crecer tu negocio
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 bg-white rounded-full shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="relative flex-1">
                <Search className="absolute left-5 sm:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar agencias..."
                  className="font-['Poppins',sans-serif] pl-12 sm:pl-14 pr-4 sm:pr-5 py-5 sm:py-7 rounded-full border-0 focus:ring-0 bg-transparent w-full"
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="font-['Poppins',sans-serif] px-8 sm:px-10 py-5 sm:py-7 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white whitespace-nowrap shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40"
              >
                Buscar
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <Select>
                <SelectTrigger className="font-['Poppins',sans-serif] bg-white border-gray-200 rounded-full py-6 shadow-sm hover:shadow-md transition-shadow hover:border-orange-300">
                  <SelectValue placeholder="Servicio deseado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diseno-web">Diseño Web y UX</SelectItem>
                  <SelectItem value="seo">SEO</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="redes">Redes Sociales</SelectItem>
                  <SelectItem value="marketing">Marketing Digital</SelectItem>
                  <SelectItem value="desarrollo">Desarrollo Web</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="font-['Poppins',sans-serif] bg-white border-gray-200 rounded-full py-6 shadow-sm hover:shadow-md transition-shadow hover:border-orange-300">
                  <SelectValue placeholder="Ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="guatemala">Guatemala</SelectItem>
                  <SelectItem value="el-salvador">El Salvador</SelectItem>
                  <SelectItem value="honduras">Honduras</SelectItem>
                  <SelectItem value="mexico">México</SelectItem>
                  <SelectItem value="colombia">Colombia</SelectItem>
                  <SelectItem value="argentina">Argentina</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="font-['Poppins',sans-serif] bg-white border-gray-200 rounded-full py-6 shadow-sm hover:shadow-md transition-shadow hover:border-orange-300">
                  <SelectValue placeholder="Industria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automotriz">Automotriz</SelectItem>
                  <SelectItem value="tecnologia">Tecnología</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="salud">Salud</SelectItem>
                  <SelectItem value="educacion">Educación</SelectItem>
                  <SelectItem value="finanzas">Finanzas</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="font-['Poppins',sans-serif] bg-white border-gray-200 rounded-full py-6 shadow-sm hover:shadow-md transition-shadow hover:border-orange-300">
                  <SelectValue placeholder="Idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="espanol">Español</SelectItem>
                  <SelectItem value="ingles">Inglés</SelectItem>
                  <SelectItem value="portugues">Portugués</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="font-['Poppins',sans-serif] bg-white border-gray-200 rounded-full py-6 shadow-sm hover:shadow-md transition-shadow hover:border-orange-300">
                  <SelectValue placeholder="Presupuesto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">$325 - $650 USD</SelectItem>
                  <SelectItem value="2">$650 - $1,500 USD</SelectItem>
                  <SelectItem value="3">$1,500 - $2,500 USD</SelectItem>
                  <SelectItem value="4">$2,500 - $5,000 USD</SelectItem>
                  <SelectItem value="5">$5,000+ USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
