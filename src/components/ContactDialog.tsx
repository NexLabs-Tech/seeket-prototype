import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
  agencyName: string;
}

export default function ContactDialog({ open, onClose, agencyName }: ContactDialogProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2000);
  };

  if (formSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="sr-only">Mensaje Enviado</DialogTitle>
            <DialogDescription className="sr-only">
              Tu mensaje ha sido enviado exitosamente
            </DialogDescription>
          </DialogHeader>
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="text-2xl tracking-tight mb-2">¡Mensaje Enviado!</h3>
            <p className="text-gray-600">
              {agencyName} recibirá tu mensaje y se pondrá en contacto contigo pronto.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contactar a {agencyName}</DialogTitle>
          <DialogDescription>
            Completa el formulario y la agencia se pondrá en contacto contigo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700 mb-2">Nombre Completo</label>
            <Input
              required
              placeholder="Tu nombre"
              className="bg-gray-50 border-gray-200 rounded-xl"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <Input
              required
              type="email"
              placeholder="tu@email.com"
              className="bg-gray-50 border-gray-200 rounded-xl"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Teléfono</label>
            <Input
              required
              type="tel"
              placeholder="+502 1234-5678"
              className="bg-gray-50 border-gray-200 rounded-xl"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Servicio de Interés</label>
            <Select required>
              <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="diseno">Diseño Web & UX</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
                <SelectItem value="branding">Branding</SelectItem>
                <SelectItem value="redes">Redes Sociales</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Mensaje</label>
            <Textarea
              required
              placeholder="Cuéntanos sobre tu proyecto..."
              className="bg-gray-50 border-gray-200 rounded-xl resize-none"
              rows={4}
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-xl"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              Enviar Mensaje
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
