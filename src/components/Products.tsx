import cabosImage from "@/assets/product-cabos.jpg";
import pelletsImage from "@/assets/product-pellets.jpg";
import artesanatoImage from "@/assets/product-artesanato.jpg";

const products = [
  {
    title: "Cabos",
    image: cabosImage,
    description: "Cabos em madeira de alta qualidade para ferramentas e utensílios.",
  },
  {
    title: "Pellets",
    image: pelletsImage,
    description: "Pellets de madeira comprimida para aquecimento sustentável.",
  },
  {
    title: "Artesanato",
    image: artesanatoImage,
    description: "Peças artesanais únicas feitas à mão com madeira torneada.",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Os Nossos Produtos
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-16 max-w-2xl mx-auto">
          Qualidade e tradição em cada peça que produzimos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
