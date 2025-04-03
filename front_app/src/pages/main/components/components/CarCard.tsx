import React from 'react';
import { Car } from '../../../../types/globalTypes';
import { Users, Fuel, Cog } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onRent: (car: Car) => void;
}

export function CarCard({ car, onRent }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={car.image} 
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{car.name}</h3>
        <p className="text-gray-600">{car.brand}</p>
        
        <div className="mt-4 flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Users size={18} />
            <span>{car.seats} мест</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel size={18} />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Cog size={18} />
            <span>{car.transmission}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-bold">{car.price}<span className="text-sm text-gray-600">₽/день</span></p>
          <button
            onClick={() => onRent(car)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Арендовать
          </button>
        </div>
      </div>
    </div>
  );
}