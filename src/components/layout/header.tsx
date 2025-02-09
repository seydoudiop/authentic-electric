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
        <Button className="bg-orange-500 hover:bg-orange-400 text-white">
          Demander un Service
        </Button>
      </div>
    </header>
  );
}
