import { Instagram, Mail, Phone } from 'lucide-react';

interface FooterProps {
  readonly scrollToInicio: () => void;
  readonly scrollToProductos: () => void;
  readonly scrollToGaleria: () => void;
  readonly scrollToContacto: () => void;
}

export default function Footer({
  scrollToInicio,
  scrollToProductos,
  scrollToGaleria,
  scrollToContacto,
}: FooterProps) {
  return (
    <footer className="bg-accent text-text-light py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mi Tienda de Moda</h3>
            <p>Potenciando tu estilo y tus ventas en Instagram.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToInicio} 
                  className="hover:underline cursor-pointer"
                  onKeyDown={(e) => { if (e.key === 'Enter') scrollToInicio(); }}
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToProductos} 
                  className="hover:underline cursor-pointer"
                  onKeyDown={(e) => { if (e.key === 'Enter') scrollToProductos(); }}
                >
                  Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToGaleria} 
                  className="hover:underline cursor-pointer"
                  onKeyDown={(e) => { if (e.key === 'Enter') scrollToGaleria(); }}
                >
                  Galería
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToContacto} 
                  className="hover:underline cursor-pointer"
                  onKeyDown={(e) => { if (e.key === 'Enter') scrollToContacto(); }}
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="." className="hover:text-gray-300">
                <Instagram size={36} strokeWidth={1.75} />
              </a>
              <a href="." className="hover:text-gray-300">
                <Mail size={36} strokeWidth={1.75} />
              </a>
              <a href="." className="hover:text-gray-300">
                <Phone size={36} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>© 2024 Mi Tienda de Moda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
