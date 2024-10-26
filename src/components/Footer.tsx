import { Instagram, Mail, Phone } from "lucide-react"

interface FooterProps {
  scrollToInicio: () => void
  scrollToProductos: () => void
  scrollToGaleria: () => void
  scrollToContacto: () => void
}

export default function Footer({ scrollToInicio, scrollToProductos, scrollToGaleria, scrollToContacto }: FooterProps) {
  return (
    <footer className="bg-[#405DE6] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mi Tienda de Moda</h3>
            <p>Potenciando tu estilo y tus ventas en Instagram.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a onClick={scrollToInicio} className="hover:underline cursor-pointer">Inicio</a></li>
              <li><a onClick={scrollToProductos} className="hover:underline cursor-pointer">Productos</a></li>
              <li><a onClick={scrollToGaleria} className="hover:underline cursor-pointer">Galería</a></li>
              <li><a onClick={scrollToContacto} className="hover:underline cursor-pointer">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-300"><Mail className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-300"><Phone className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>© 2024 Mi Tienda de Moda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}