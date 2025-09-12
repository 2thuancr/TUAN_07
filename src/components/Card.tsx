import React from 'react';
import { CardProps } from '../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  image,
  onClick,
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden';
  const clickableClasses = onClick ? 'cursor-pointer hover:shadow-lg transition-shadow duration-200' : '';
  
  const classes = `${baseClasses} ${clickableClasses} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title || 'Card image'}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-4">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {title}
          </h3>
        )}
        
        {subtitle && (
          <p className="text-sm text-gray-600 mb-3">
            {subtitle}
          </p>
        )}
        
        {children}
      </div>
    </div>
  );
};

export default Card;
