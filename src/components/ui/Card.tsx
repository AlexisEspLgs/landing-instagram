// components/ui/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string; // Para clases adicionales
  onClick?: () => void; // Añadir prop para onClick
  onMouseEnter?: () => void; // Añadir prop para onMouseEnter
  onMouseLeave?: () => void; // Añadir prop para onMouseLeave
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <button
      className={`bg-white shadow-lg rounded-lg overflow-hidden w-full ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ cursor: 'pointer' }} // Asegura que el cursor sea un puntero
      type="button" // Indica que es un botón
    >
      {children}
    </button>
  );
};

export default Card;
