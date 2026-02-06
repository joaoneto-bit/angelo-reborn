import workshopImage from "@/assets/workshop.jpg";
import pelletsPromo from "@/assets/pellets-promo.png";

const News = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={workshopImage}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Últimas Notícias
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-8">
              Acompanhe os nossos produtos e as novidades da nossa oficina. 
              Estamos constantemente a inovar e a desenvolver novas soluções 
              em madeira para os nossos clientes.
            </p>
            <a
              href="#produtos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide rounded hover:bg-primary/90 transition-colors duration-200"
            >
              Ver Produtos
            </a>
          </div>

          {/* Pellets Promo Image */}
          <div className="flex justify-center">
            <img
              src={pelletsPromo}
              alt="Promoção de pellets - 15kg por 5€"
              className="w-64 md:w-80 rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
