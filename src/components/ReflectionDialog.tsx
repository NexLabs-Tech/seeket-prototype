import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface ReflectionDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  question: string;
}

export default function ReflectionDialog({
  open,
  onClose,
  title,
  question,
}: ReflectionDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>{question}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <Textarea
            placeholder="Escribe tus reflexiones aquí..."
            className="bg-gray-50 border-gray-200 rounded-xl resize-none min-h-32"
          />
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-xl"
            >
              Omitir
            </Button>
            <Button
              onClick={onClose}
              className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              Continuar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
