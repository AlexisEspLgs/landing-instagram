import Image from 'next/image';
import Card from './ui/Card';
import CardContent from './ui/CardContent';
import { useState, forwardRef } from 'react';

interface Product {
  title: string;
  description: string;
  image: string;
}

interface ProductSectionProps {
  onProductClick: (productName: string) => void;
}

const products: Product[] = [
  { title: "Ropa Casual", description: "Perfecta para tu día a día y tus stories de Instagram.", image: "/images/instagram-posts/post1.jpg" },
  { title: "Accesorios", description: "Complementa tu look y aumenta tus likes.", image: '/images/instagram-posts/post1.jpg' },
  { title: "Outfits Completos", description: "Conjuntos que harán destacar tu feed.", image: '/images/instagram-posts/post1.jpg' }
];

const ProductSection = forwardRef<HTMLElement, ProductSectionProps>(({ onProductClick }, ref) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredProduct(index);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-12 text-center shadow-lg transform transition-all duration-300 scale-75 hover:scale-100">
          <h2 className="text-3xl font-bold">Nuestros Productos Destacados</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              onClick={() => onProductClick(product.title)} 
              className="cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <CardContent className="relative p-6">
                <div className="relative overflow-hidden flex items-center justify-center h-80 w-80 mx-auto">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={`rounded-lg transition-all duration-300 ease-in-out object-cover ${hoveredProduct === index ? 'filter blur-sm' : ''}`}
                  />
                  {hoveredProduct === index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg transition-opacity duration-300 ease-in-out">
                      <span className="text-lg">Ver sección</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl text-gray-600 font-semibold mb-2 text-center">{product.title}</h3>
                <p className="text-gray-600 text-center">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

ProductSection.displayName = 'ProductSection';

export default ProductSection;
