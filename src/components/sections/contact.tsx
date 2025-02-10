import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { useToast } from "@/components/ui/use-toast";

const SUBMIT_COOLDOWN = 60000; // 1 minute cooldown

export default function Contact() {
  const { toast } = useToast();
  const [showDialog, setShowDialog] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      contactFormSchema.shape[field].parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof Error) {
        setErrors((prev) => ({ ...prev, [field]: error.message }));
      }
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check cooldown
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
      const remainingTime = Math.ceil(
        (SUBMIT_COOLDOWN - (now - lastSubmitTime)) / 1000,
      );
      toast({
        title: "Veuillez patienter",
        description: `Vous pourrez renvoyer un message dans ${remainingTime} secondes`,
        variant: "destructive",
      });
      return;
    }

    // Validate all fields
    try {
      contactFormSchema.parse(formData);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Erreur de validation",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || "xzblpznk"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _replyto: formData.email,
            _subject: `Nouveau message de ${formData.name}: ${formData.subject}`,
            _cc: "peuti333@gmail.com",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setLastSubmitTime(Date.now());
      setFormData({ name: "", email: "", subject: "", message: "" });
      setShowDialog(true);
    } catch (error) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setShowDialog(true);
    }

    setLoading(false);
  };
  return (
    <>
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
                  <a
                    href="tel:+221773614183"
                    className="text-gray-100 hover:text-orange-500"
                  >
                    +221 77 361 4183
                  </a>
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    Horaires
                  </h3>
                  <p className="text-gray-100">
                    Lun-Ven: 8h - 18h
                    <br />
                    Service d'Urgence 24/7
                  </p>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-dark-800 p-8 rounded-lg border border-dark-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Nom"
                  className="bg-dark-700 border-dark-600 text-white"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-500 mt-1">
                    {errors.name}
                  </p>
                )}
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-dark-700 border-dark-600 text-white"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-500 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <Input
                placeholder="Sujet"
                className="bg-dark-700 border-dark-600 text-white"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                required
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="text-sm text-red-500 mt-1">
                  {errors.subject}
                </p>
              )}
              <Textarea
                placeholder="Votre message"
                className="bg-dark-700 border-dark-600 text-white h-32"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-red-500 mt-1">
                  {errors.message}
                </p>
              )}
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-white"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi...
                  </>
                ) : (
                  "Envoyer le Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Dialog
        open={showDialog}
        onOpenChange={(open) => {
          setShowDialog(open);
          if (!open) {
            setFormData({ name: "", email: "", subject: "", message: "" });
          }
        }}
      >
        <DialogContent className="bg-dark-800 text-white border-dark-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Message envoyé à Authentic Electric
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-gray-100 mb-6">
              Nous vous repondrons des que possible.
            </p>
            <Button
              onClick={() => setShowDialog(false)}
              className="bg-orange-500 hover:bg-orange-400 text-white"
            >
              Fermer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
