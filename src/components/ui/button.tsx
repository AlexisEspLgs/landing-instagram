// components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'link' | 'primary' | 'ghost'; // Agregar 'ghost' aquí
  className?: string; // Clases adicionales
  size?: 'small' | 'medium' | 'large'; // Tamaños del botón
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  className = '',
  size = 'medium', // Tamaño por defecto
  type = 'button', // Valor por defecto
  ...props
}) => {
  const baseStyle = 'py-2 px-4 rounded focus:outline-none';
  
  const variantStyle = variant === 'link' 
    ? 'text-blue-500 hover:underline' 
    : variant === 'ghost' // Agregar el estilo para 'ghost'
    ? 'bg-transparent text-gray-700 hover:bg-gray-200' 
    : 'bg-blue-500 text-white hover:bg-blue-600';

  const sizeStyle = size === 'small' 
    ? 'text-sm' 
    : size === 'large' 
    ? 'text-lg' 
    : 'text-base'; // Tamaño base

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      {...props} // Pasar props adicionales
    >
      {children}
    </button>
  );
};

export default Button;
