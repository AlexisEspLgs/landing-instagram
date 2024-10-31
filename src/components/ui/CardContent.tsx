import React from 'react';

interface CardContentProps {
  children: React.ReactNode;
  className?: string; // Para clases adicionales
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 w-full text-left ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;
