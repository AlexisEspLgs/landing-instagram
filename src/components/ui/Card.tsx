import React from 'react'

interface CardProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const Card: React.FC<CardProps> = ({
  children,
  onClick,
  className = '',
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button 
      className={`bg-white/90 shadow-lg rounded-lg overflow-hidden w-full transition-all duration-300 transform hover:scale-105 hover:bg-white ${className}`} 
      onClick={onClick} 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type="button" 
      style={{ cursor: 'pointer' }}
    >
      {children}
    </button>
  )
}

export default Card