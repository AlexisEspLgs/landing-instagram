import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from "lucide-react";
import Button from './ui/button';

interface RopaCasualProps {
  onClose: () => void;
}

const RopaCasual: React.FC<RopaCasualProps> = ({ onClose }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const newPhotos = [
        '/images/outfit_completo.jpg',
        '/images/accesorios.jpg',
        '/images/image_header.jpg',
      ];
      setPhotos(newPhotos);
    };

    loadPhotos();
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-100 overflow-y-auto z-50">
      <div className="container mx-auto px-4 py-8 bg-gray-300"> {/* Cambia a un color tipo piedra */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Ropa Casual</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo} className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={photo}
                alt={`Ropa casual ${photo.split('/').pop()}`}
                layout="fill"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RopaCasual;
