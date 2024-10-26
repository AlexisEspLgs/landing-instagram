import Button from "../components/ui/button";

interface HeaderProps {
  scrollToInicio: () => void;
  scrollToProductos: () => void;
  scrollToGaleria: () => void;
  scrollToContacto: () => void;
}

export default function Header({ scrollToInicio, scrollToProductos, scrollToGaleria, scrollToContacto }: Readonly<HeaderProps>) {
  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-center md:text-left">Mi Tienda de Moda</h1>
        <nav>
          <ul className="flex justify-center md:justify-end space-x-4">
            <li><Button variant="link" className="text-white " onClick={scrollToInicio}>Inicio</Button></li>
            <li><Button variant="link" className="text-white" onClick={scrollToProductos}>Productos</Button></li>
            <li><Button variant="link" className="text-white" onClick={scrollToGaleria}>Galería</Button></li>
            <li><Button variant="link" className="text-white" onClick={scrollToContacto}>Contacto</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
