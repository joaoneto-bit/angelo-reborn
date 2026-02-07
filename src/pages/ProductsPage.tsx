import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cabosImage from "@/assets/product-cabos.jpg";
import pelletsImage from "@/assets/product-pellets.jpg";
import artesanatoImage from "@/assets/product-artesanato.jpg";
import productsHero from "@/assets/products-hero.jpg";

const productDetails = [
  {
    title: "Cabos",
    image: cabosImage,
    description:
      "Cabos em madeira de alta qualidade, concebidos para ferramentas agrícolas, industriais e utensílios domésticos. Cada cabo é torneado com precisão para garantir ergonomia, durabilidade e resistência ao uso intensivo.",
    materials: [
      "Eucalipto — leve, resistente e amplamente disponível",
      "Pinho — flexível e económico, ideal para ferramentas leves",
      "Faia — madeira dura de excelente acabamento",
    ],
    process:
      "A matéria-prima é selecionada e cortada em blocos cilíndricos. De seguida, cada peça é torneada no torno mecânico para obter o diâmetro e comprimento desejados. Após o torneamento, os cabos são lixados para um acabamento suave e podem receber tratamento com verniz ou óleo protetor.",
  },
  {
    title: "Pellets",
    image: pelletsImage,
    description:
      "Pellets de madeira comprimida para aquecimento sustentável e eficiente. Produzidos a partir de resíduos de madeira da nossa própria produção, garantindo um ciclo de aproveitamento total e uma pegada ecológica reduzida.",
    materials: [
      "Serradura e aparas de madeira — subprodutos do torneamento",
      "Madeira virgem triturada — quando necessário para manter a qualidade",
    ],
    process:
      "Os resíduos de madeira são recolhidos, secos e triturados até obter uma granulometria fina. A serradura é então comprimida a alta pressão em moldes cilíndricos, sem adição de químicos — a lignina natural da madeira atua como ligante. O resultado são pellets densos, com alto poder calorífico.",
  },
  {
    title: "Artesanato",
    image: artesanatoImage,
    description:
      "Peças artesanais únicas, torneadas à mão com dedicação e mestria. Desde peças decorativas a utensílios funcionais, cada criação reflete a tradição da tornearia portuguesa aliada a um design contemporâneo.",
    materials: [
      "Oliveira — madeira nobre com veios marcantes",
      "Nogueira — tons escuros e textura sofisticada",
      "Castanheiro — madeira tradicional portuguesa, versátil e durável",
    ],
    process:
      "Cada peça começa com a seleção cuidadosa do bloco de madeira, escolhido pelo seu veio e características naturais. O artesão torneia a peça manualmente, moldando-a progressivamente até à forma final. Segue-se o lixamento fino em vários graus e o acabamento com cera natural ou óleo de tung, realçando a beleza natural da madeira.",
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero banner */}
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
              Os Nossos Produtos
            </h1>
            <p className="text-primary-foreground/90 font-body text-lg max-w-none text-shadow-hero">
              Qualidade, tradição e sustentabilidade em cada peça que sai da nossa oficina em Santo Tirso.
            </p>
          </div>
        </section>

        {/* Product details */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 space-y-24 max-w-5xl">
            {productDetails.map((product, index) => (
              <article
                key={product.title}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-10 md:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="overflow-hidden rounded-lg aspect-square">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {product.description}
                  </p>

                  {/* Materials */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                      Materiais
                    </h3>
                    <ul className="space-y-2">
                      {product.materials.map((material) => (
                        <li
                          key={material}
                          className="text-muted-foreground font-body text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                      Método de Fabrico
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {product.process}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
