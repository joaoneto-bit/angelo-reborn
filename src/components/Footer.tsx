import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contactos" className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
              Ângelo Araújo
            </h2>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-sm">
              Soluções inovadoras de torno em madeira e ferragens, 
              desde Santo Tirso para todo o país.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-4">
              Contactos
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
                  Rua de Sobradelo Nº 101<br />
                  Água Longa, 4825-118<br />
                  Santo Tirso, Portugal
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <div className="text-primary-foreground/70 font-body text-sm">
                  <p>(+351) 229 681 365</p>
                  <p>(+351) 916 051 996</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/40 font-body text-xs text-center">
            © {new Date().getFullYear()} Ângelo Araújo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
