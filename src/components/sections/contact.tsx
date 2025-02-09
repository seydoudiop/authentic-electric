import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Appelez-Nous
                </h3>
                <p className="text-gray-100">+221 77 361 4183</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Envoyez-nous un Email
                </h3>
                <p className="text-gray-100">peuti333@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Adresse</h3>
                <p className="text-gray-100">
                  PIKINE ICOTAF EST VILLA 5233, Dakar 12500, Sénégal
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Horaires</h3>
                <p className="text-gray-100">
                  Lun-Ven: 8h - 18h
                  <br />
                  Service d'Urgence 24/7
                </p>
              </div>
            </div>
          </div>
          <form className="space-y-6 bg-dark-800 p-8 rounded-lg border border-dark-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Nom"
                className="bg-dark-700 border-dark-600 text-white"
              />
              <Input
                placeholder="Email"
                type="email"
                className="bg-dark-700 border-dark-600 text-white"
              />
            </div>
            <Input
              placeholder="Sujet"
              className="bg-dark-700 border-dark-600 text-white"
            />
            <Textarea
              placeholder="Votre message"
              className="bg-dark-700 border-dark-600 text-white h-32"
            />
            <Button className="w-full bg-orange-500 hover:bg-orange-400 text-white">
              Envoyer le Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
