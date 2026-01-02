// Base types for the application

export interface CarModel {
  id: string;
  name: string;
  category: 'sedan' | 'suv' | 'hatchback' | 'hybrid' | 'truck';
  price: {
    starting: number;
    currency: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  specifications: {
    engine: string;
    transmission: string;
    fuelEconomy: string;
    seating: number;
    drivetrain: string;
  };
  features: string[];
  description: string;
  available: boolean;
}

export interface TestDriveForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  carModelId: string;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  active?: boolean;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}