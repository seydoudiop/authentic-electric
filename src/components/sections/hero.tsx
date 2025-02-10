import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-transparent opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/40 via-dark-950 to-dark-950"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMjRoLTJ2MmgydjEyaC0ydjJoMnYtMmgydi0yaDJ2LTJoLTJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgtMnYtMnptLTEyIDBIMjJ2MmgydjEyaC0ydjJoMnYtMmgydi0yaDF2LTJoLTF2LTJoLTJ2LTJoMnYtMmgtMnYtMmgtMnYtMnoiIGZpbGw9IiNGRjRCMzYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-5"></div>
      </div>
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center relative">
        <div>
          <Badge className="bg-orange-500/20 text-orange-500 border-orange-500/30 mb-6">
            Agréé & Assuré
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Alimenter Votre Monde avec{" "}
            <span className="text-orange-500">Excellence</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            AUTHENTIC ELECTRIC: Services électriques professionnels à Dakar,
            spécialisés dans les solutions électriques résidentielles et
            commerciales depuis 2015
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-400 text-white"
              onClick={() => (window.location.href = "tel:+221773614183")}
            >
              Devis Gratuit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
            >
              Nos Services
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-orange-500">8+</div>
              <div className="text-gray-100">Ans d'Expérience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">4+</div>
              <div className="text-gray-100">Grandes Entreprises</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">100%</div>
              <div className="text-gray-100">Satisfaction</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800"
              alt="Electrician at work"
              className="rounded-lg shadow-2xl brightness-75 hover:brightness-100 transition-all duration-300 border border-orange-500/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-lg shadow-xl animate-pulse">
              <div className="text-2xl font-bold">24/7</div>
              <div className="font-medium">Service d'Urgence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
