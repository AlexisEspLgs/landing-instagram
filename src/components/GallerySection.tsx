'use client'

import { useState, useEffect, forwardRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from "lucide-react"
import Button from './ui/button'

const GallerySection = forwardRef<HTMLElement>((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    { id: 1, src: "/images/image_header.jpg" },
    { id: 2, src: "/images/accesorios.jpg" },
    { id: 3, src: "/images/ropa_casual.jpg" },
    { id: 4, src: "/images/image_header.jpg" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length)
  }

  return (
    <section ref={ref} className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Galería de Estilos</h2>
        <div className="relative">
          <div className="overflow-hidden rounded-lg border-4 border-gray-300">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((img) => (
                <div key={img.id} className="flex-shrink-0 mx-auto relative w-[600px] h-[600px] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={`Estilo ${img.id}`}
                    layout="fill" // Asegura que la imagen llene el contenedor
                    objectFit="cover" // Mantiene la proporción y recorta si es necesario
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <Button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-700 text-white" onClick={prevSlide}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-700 text-white" onClick={nextSlide}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
})

GallerySection.displayName = 'GallerySection'

export default GallerySection
