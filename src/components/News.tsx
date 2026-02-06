import workshopImage from "@/assets/workshop.jpg";

const News = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Últimas Notícias
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
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

          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={workshopImage}
              alt="Oficina de tornearia"
              className="w-full h-80 md:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
