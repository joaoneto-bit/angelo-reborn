import heroImage from "@/assets/hero-wood.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const el = document.querySelector("#produtos");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt="Pellets e aparas de madeira"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-shadow-hero animate-fade-in-up">
          Soluções inovadoras de torno em madeira e ferragens
        </h1>

        <button
          onClick={scrollToProducts}
          className="mt-10 inline-block px-8 py-4 bg-secondary text-secondary-foreground font-body font-semibold text-base tracking-wide rounded hover:bg-secondary/90 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Confira os nossos Produtos
        </button>
      </div>
    </section>
  );
};

export default Hero;
