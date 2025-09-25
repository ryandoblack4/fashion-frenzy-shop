import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Vestido Elegante Premium",
      price: 299.90,
      originalPrice: 399.90,
      image: product1,
      category: "Feminino",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Jaqueta Masculina Moderna",
      price: 449.90,
      image: product2,
      category: "Masculino",
      isNew: true,
    },
    {
      id: 3,
      name: "Bolsa Designer Collection",
      price: 189.90,
      originalPrice: 249.90,
      image: product3,
      category: "Acessórios",
      isSale: true,
    },
    {
      id: 4,
      name: "Tênis Street Style",
      price: 229.90,
      image: product4,
      category: "Calçados",
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra nossa seleção especial de peças únicas e tendências da temporada
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="px-8">
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Categorias
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Feminino</h3>
                  <p className="text-sm opacity-90">Elegância e estilo</p>
                </div>
              </div>
            </div>
            
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Masculino</h3>
                  <p className="text-sm opacity-90">Sofisticação moderna</p>
                </div>
              </div>
            </div>
            
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Acessórios</h3>
                  <p className="text-sm opacity-90">Complementos perfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Receba em primeira mão as últimas tendências e ofertas exclusivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button size="lg" className="px-8">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">StyleCo</h3>
              <p className="text-sm opacity-90">
                Moda moderna e elegante para todas as ocasiões. Qualidade e estilo em cada peça.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">Feminino</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Masculino</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Acessórios</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Calçados</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Trocas e Devoluções</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Frete Grátis</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Sobre</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">Nossa História</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Sustentabilidade</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Trabalhe Conosco</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Imprensa</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 StyleCo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
