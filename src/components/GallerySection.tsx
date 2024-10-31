'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 
import { ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = forwardRef<HTMLElement>((props, ref) => {
  const images = [
    { id: 1, src: "/images/image_header.jpg" },
    { id: 2, src: "/images/accesorios.jpg" },
    { id: 3, src: "/images/ropa_casual.jpg" },
    { id: 4, src: "/images/image_header.jpg" }
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-12 text-center shadow-lg transform transition-all duration-300 scale-75 hover:scale-100">
          <h2 className="text-3xl font-bold">Galería de Estilos</h2>
        </div>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="relative"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="relative w-full h-[600px] overflow-hidden">
                <Image
                  src={img.src}
                  alt={`Estilo ${img.id}`}
                  fill // Usa 'fill' para llenar el contenedor
                  style={{ objectFit: 'cover' }} // Estilo para mantener la proporción
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-accent hover:bg-accent-hover text-text-light">
            <ChevronLeft className="h-6 w-6" />
          </div>
          <div className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-accent hover:bg-accent-hover text-text-light">
            <ChevronRight className="h-6 w-6" />
          </div>
        </Swiper>
      </div>
    </section>
  );
});

GallerySection.displayName = 'GallerySection';

export default GallerySection;
