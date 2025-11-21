import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface WelcomeDialogProps {
  open: boolean;
  onClose: () => void;
  userType: "user" | "agency";
}

export default function WelcomeDialog({ open, onClose, userType }: WelcomeDialogProps) {
  const [step, setStep] = useState(1);

  const userContent = [
    {
      title: "¡Bienvenido/a a Seeket!",
      description:
        "Estás por testear el MVP de una plataforma que conecta negocios con agencias de marketing digital en Latinoamérica.",
      content:
        "Tu tarea es simular que necesitas contratar un servicio y recorrer la plataforma como si fueras un cliente real. Durante el testeo verás pasos guiados y preguntas que te ayudarán a reflexionar.",
    },
    {
      title: "Instrucciones de Navegación",
      description: "Explora el Header y Footer de la plataforma",
      content: (
        <div className="space-y-3 text-gray-700">
          <p className="mb-4">En el Header encontrarás:</p>
          <ul className="space-y-2 ml-4">
            <li>• <strong>Marketplace:</strong> Directorio de agencias con filtros</li>
            <li>• <strong>Tu Agencia:</strong> Para agencias registradas</li>
            <li>• <strong>About:</strong> Información sobre Seeket</li>
            <li>• <strong>Mi Perfil:</strong> Tu cuenta personal</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            El Footer contiene información de contacto, políticas y enlaces secundarios.
          </p>
        </div>
      ),
    },
    {
      title: "Aplica Filtros de Búsqueda",
      description: "Para este testeo, usa los siguientes parámetros:",
      content: (
        <div className="space-y-3 bg-gray-50 p-6 rounded-xl">
          <p>• <strong>Servicio deseado:</strong> Diseño web y UX</p>
          <p>• <strong>Ubicación:</strong> Guatemala</p>
          <p>• <strong>Industria:</strong> Automotriz</p>
          <p>• <strong>Idioma:</strong> Español</p>
          <p>• <strong>Presupuesto:</strong> Entre $325 y $650 USD</p>
        </div>
      ),
    },
    {
      title: "Explora la Agencia",
      description: "Encuentra NovaSpark Agency",
      content: (
        <div className="space-y-3 text-gray-700">
          <p>Una vez aplicados los filtros, busca la ficha de <strong>NovaSpark Agency</strong>.</p>
          <p className="text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">
            💡 <strong>Nota:</strong> El precio que ves en la ficha corresponde al servicio más
            económico entre los filtros seleccionados.
          </p>
          <p>Haz clic en la ficha para ver el perfil completo de la agencia.</p>
        </div>
      ),
    },
  ];

  const agencyContent = [
    {
      title: "¡Bienvenido/a a Seeket!",
      description: "Panel de Gestión para Agencias",
      content:
        "Vas a explorar cómo tu agencia aparecerá, operará y conectará con clientes en Seeket. Actuarás como NovaSpark Agency, una agencia ficticia creada para este testeo.",
    },
    {
      title: "Secciones del Panel",
      description: "Tu panel tiene 3 secciones principales:",
      content: (
        <div className="space-y-3 text-gray-700">
          <div className="bg-blue-50 p-4 rounded-xl">
            <p className="mb-1"><strong>1. Perfil</strong></p>
            <p className="text-sm">Gestiona toda la información visible de tu agencia</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <p className="mb-1"><strong>2. Estadísticas</strong></p>
            <p className="text-sm">Analiza métricas de visitas, conversiones y reseñas</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl">
            <p className="mb-1"><strong>3. Facturación</strong></p>
            <p className="text-sm">Gestiona tu suscripción de $20/mes y métodos de pago</p>
          </div>
        </div>
      ),
    },
    {
      title: "Tu Perfil es Editable",
      description: "Personaliza cada aspecto de tu agencia",
      content: (
        <div className="space-y-2 text-gray-700">
          <p>Podrás editar:</p>
          <ul className="ml-4 space-y-1 text-sm">
            <li>• Visión y descripción</li>
            <li>• Servicios y precios</li>
            <li>• Paquetes personalizados</li>
            <li>• Portafolio con proyectos</li>
            <li>• Redes sociales</li>
          </ul>
          <p className="text-sm text-orange-600 mt-3">
            Los cambios que hagas aquí se reflejarán en cómo los clientes ven tu agencia.
          </p>
        </div>
      ),
    },
  ];

  const content = userType === "user" ? userContent : agencyContent;
  const currentContent = content[step - 1];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <DialogTitle className="text-2xl">{currentContent.title}</DialogTitle>
            <span className="text-sm text-gray-500">
              {step} de {content.length}
            </span>
          </div>
          <DialogDescription>{currentContent.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 mb-6">
          {typeof currentContent.content === "string" ? (
            <p className="text-gray-700 leading-relaxed">{currentContent.content}</p>
          ) : (
            currentContent.content
          )}
        </div>
        <div className="flex gap-3">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="flex-1 rounded-xl"
            >
              Anterior
            </Button>
          )}
          {step < content.length ? (
            <Button
              onClick={() => setStep(step + 1)}
              className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              Siguiente
            </Button>
          ) : (
            <Button
              onClick={onClose}
              className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              ¡Comenzar!
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
