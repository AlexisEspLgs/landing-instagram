// components/ui/cardContent.tsx
import React from 'react';

interface CardContentProps {
  children: React.ReactNode;
  className?: string; // Para clases adicionales
  onClick?: () => void; // Manejador de click opcional
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '', onClick }) => {
  return (
    <button 
      className={`p-4 w-full text-left ${className}`} 
      onClick={onClick} 
      style={{ cursor: 'pointer' }} // Cambia el cursor para indicar que es interactivo
    >
      {children}
    </button>
  );
};

export default CardContent;
