import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Quote {
  text: string;
  author: string;
  role: string;
}

const quotes: Quote[] = [
  {
    text: "La innovación distingue entre un líder y un seguidor.",
    author: "Steve Jobs",
    role: "Co-fundador de Apple",
  },
  {
    text: "Tu trabajo va a llenar gran parte de tu vida, y la única manera de estar verdaderamente satisfecho es hacer lo que consideras un gran trabajo.",
    author: "Steve Jobs",
    role: "Co-fundador de Apple",
  },
  {
    text: "Si no estás avergonzado de la primera versión de tu producto, lo lanzaste demasiado tarde.",
    author: "Reid Hoffman",
    role: "Co-fundador de LinkedIn",
  },
  {
    text: "El éxito es un mal profesor. Seduce a la gente inteligente a pensar que no pueden perder.",
    author: "Bill Gates",
    role: "Co-fundador de Microsoft",
  },
  {
    text: "La mejor manera de predecir el futuro es inventarlo.",
    author: "Alan Kay",
    role: "Científico de la computación",
  },
  {
    text: "No te preocupes por el fracaso, solo tienes que estar en lo correcto una vez.",
    author: "Drew Houston",
    role: "CEO de Dropbox",
  },
  {
    text: "El emprendedor siempre busca el cambio, responde a él y lo aprovecha como una oportunidad.",
    author: "Peter Drucker",
    role: "Consultor de gestión",
  },
  {
    text: "Las ideas son fáciles. La implementación es difícil.",
    author: "Guy Kawasaki",
    role: "Ex-evangelista de Apple",
  },
];

export default function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 15000); // Change every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full flex items-center justify-center p-8 md:p-12 lg:p-16 font-['Poppins',sans-serif]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-white max-w-lg font-['Poppins',sans-serif]"
        >
          <div className="mb-8">
            <svg
              className="w-12 h-12 text-white/40 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <blockquote className="space-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              {quotes[currentIndex].text}
            </p>

            <footer className="pt-6 border-t border-white/20">
              <cite className="not-italic">
                <div className="font-semibold text-lg">
                  {quotes[currentIndex].author}
                </div>
                <div className="text-white/70 mt-1">
                  {quotes[currentIndex].role}
                </div>
              </cite>
            </footer>
          </blockquote>

          {/* Progress dots */}
          <div className="flex gap-2 mt-12 justify-center">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
