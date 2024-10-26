'use client';

import { useRef, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import GallerySection from '../components/GallerySection';
import InstagramSection from '../components/InstagramSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import RopaCasual from '../components/RopaCasual';

const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
  window.scrollTo({
    top: elementRef.current?.offsetTop,
    behavior: 'smooth'
  });
};

export default function LandingPage() {
  const inicioRef = useRef(null);
  const productosRef = useRef(null);
  const galeriaRef = useRef(null);
  const contactoRef = useRef(null);
  const [showRopaCasual, setShowRopaCasual] = useState(false);

  const handleProductClick = (productName: string) => {
    if (productName === "Ropa Casual") {
      setShowRopaCasual(true);
    }
    // Aquí puedes agregar más condiciones para otros productos
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header 
        scrollToInicio={() => scrollToSection(inicioRef)}
        scrollToProductos={() => scrollToSection(productosRef)}
        scrollToGaleria={() => scrollToSection(galeriaRef)}
        scrollToContacto={() => scrollToSection(contactoRef)}
      />
      <main className="flex-grow">
        <Hero ref={inicioRef} scrollToProductos={() => scrollToSection(productosRef)} />
        <ProductSection ref={productosRef} onProductClick={handleProductClick} />
        <GallerySection ref={galeriaRef} />
        <InstagramSection />
        <ContactForm ref={contactoRef} />
      </main>
      <Footer 
        scrollToInicio={() => scrollToSection(inicioRef)}
        scrollToProductos={() => scrollToSection(productosRef)}
        scrollToGaleria={() => scrollToSection(galeriaRef)}
        scrollToContacto={() => scrollToSection(contactoRef)}
      />
      {showRopaCasual && <RopaCasual onClose={() => setShowRopaCasual(false)} />}
    </div>
  );
}
