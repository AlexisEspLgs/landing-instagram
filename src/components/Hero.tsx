import { forwardRef } from 'react'
import Image from 'next/image'
import Button from './ui/button'

interface HeroProps {
  scrollToProductos: () => void
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ scrollToProductos }, ref) => {
  return (
    <section ref={ref} className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Descubre las Últimas Tendencias de Moda</h2>
          <p className="text-xl mb-6">Potencia tu estilo y tus ventas en Instagram con nuestra colección exclusiva.</p>
          <Button size="large" className="bg-gray-900  text-[#405DE6] hover:bg-gray-600" onClick={scrollToProductos}>
            Ver Catálogo
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/image_header.jpg"
            alt="Imagen de ropa de moda"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero