import { Card } from "@/components/ui/card";
import {
  CircuitBoard,
  Home,
  Building2,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: <CircuitBoard className="w-10 h-10" />,
    title: "Installation Électrique",
    description:
      "Installations électriques professionnelles pour propriétés résidentielles et commerciales",
  },
  {
    icon: <Home className="w-10 h-10" />,
    title: "Services Résidentiels",
    description:
      "Solutions électriques complètes pour les maisons, des réparations aux mises à niveau complètes",
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Projets Commerciaux",
    description:
      "Services électriques spécialisés pour entreprises et propriétés commerciales",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Réparations d'Urgence",
    description:
      "Services de réparation électrique d'urgence 24/7 quand vous en avez le plus besoin",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Inspections de Sécurité",
    description:
      "Services complets d'audit de sécurité électrique et de certification",
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Maintenance",
    description:
      "Programmes de maintenance régulière pour maintenir vos systèmes électriques en bon état",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-dark-800 border border-dark-700 hover:border-orange-500 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-100">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
