import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-dark-900/80 backdrop-blur-md text-white z-50 border-b border-orange-500/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-orange-500" />
          <span className="text-xl font-bold">AUTHENTIC ELECTRIC</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            className="md:hidden text-white"
            onClick={() => document.documentElement.requestFullscreen()}
          >
            <span className="sr-only">Fullscreen</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </button>
          <a href="#services" className="hover:text-orange-500">
            Services
          </a>
          <a href="#portfolio" className="hover:text-orange-500">
            Réalisations
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </nav>
        <Button
          className="bg-orange-500 hover:bg-orange-400 text-white"
          onClick={() => (window.location.href = "tel:+221773614183")}
        >
          Demander un Service
        </Button>
      </div>
    </header>
  );
}
