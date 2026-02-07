import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import productsHero from "@/assets/products-hero.jpg";

const ContactsPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor preencha o nome, email e mensagem.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulated — no backend email sending yet
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Serviço temporariamente indisponível",
      description:
        "O envio de mensagens está temporariamente indisponível. Por favor contacte-nos diretamente por telefone ou email.",
      variant: "destructive",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={productsHero}
              alt="Pellets e aparas de madeira"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-shadow-hero">
              Contactos
            </h1>
            <p className="text-primary-foreground/90 font-body text-lg max-w-none text-shadow-hero">
              Entre em contacto connosco. Estamos disponíveis para responder a todas as suas questões.
            </p>
          </div>
        </section>

        {/* Contact info + form */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left — info + map */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Onde Estamos
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-accent mt-0.5 shrink-0" />
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">
                        Rua de Sobradelo Nº 101
                        <br />
                        Água Longa, 4825-118
                        <br />
                        Santo Tirso, Portugal
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-accent shrink-0" />
                      <div className="text-muted-foreground font-body text-sm">
                        <p>(+351) 229 681 365</p>
                        <p>(+351) 916 051 996</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-accent shrink-0" />
                      <p className="text-muted-foreground font-body text-sm">
                        geral@angeloaraujo.pt
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps embed */}
                <div className="overflow-hidden rounded-lg border border-border">
                  <iframe
                    title="Localização Ângelo Araújo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.0!2d-8.4815!3d41.2685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRXN0cmFkYSBkZSBTb2JyYWRlbG8gMTAxLCDDgWd1YSBMb25nYQ!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt&q=Rua+de+Sobradelo+101,+%C3%81gua+Longa,+4825-118+Santo+Tirso,+Portugal"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Right — contact form */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Envie-nos uma Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="O seu nome"
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="O seu email"
                      maxLength={255}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Assunto da mensagem"
                      maxLength={200}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Escreva aqui a sua mensagem..."
                      rows={5}
                      maxLength={1000}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto gap-2"
                  >
                    <Send size={16} />
                    {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
                  </Button>

                  <p className="text-muted-foreground font-body text-xs">
                    * Campos obrigatórios. A sua mensagem será enviada directamente para o nosso email.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
