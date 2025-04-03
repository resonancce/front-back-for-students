export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  type: string;
  seats: number;
  transmission: 'Автоматическая' | 'Механическая';
  fuelType: 'Бензин' | 'Дизель' | 'Электро';
  available: boolean;
}

export interface RentalForm {
  pickupDate: string;
  returnDate: string;
  location: string;
}

export interface BookingForm extends RentalForm {
  fullName: string;
  phone: string;
  email: string;
  comment: string;
}