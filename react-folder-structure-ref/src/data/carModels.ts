import { CarModel } from '../types';

export const carModels: CarModel[] = [
  {
    id: '1',
    name: 'Camry',
    category: 'sedan',
    price: {
      starting: 25200,
      currency: 'USD'
    },
    images: {
      main: 'https://via.placeholder.com/800x600/0066CC/FFFFFF?text=Toyota+Camry',
      gallery: [
        'https://via.placeholder.com/800x600/0066CC/FFFFFF?text=Camry+Interior',
        'https://via.placeholder.com/800x600/0066CC/FFFFFF?text=Camry+Side',
        'https://via.placeholder.com/800x600/0066CC/FFFFFF?text=Camry+Rear'
      ]
    },
    specifications: {
      engine: '2.5L 4-Cylinder',
      transmission: 'CVT Automatic',
      fuelEconomy: '32 city / 41 highway mpg',
      seating: 5,
      drivetrain: 'FWD'
    },
    features: [
      'Toyota Safety Sense 2.0',
      'Apple CarPlay/Android Auto',
      'Dual-zone climate control',
      'LED headlights',
      'Smart key system'
    ],
    description: 'The Toyota Camry offers exceptional value with its spacious interior, impressive fuel economy, and advanced safety features.',
    available: true
  },
  {
    id: '2',
    name: 'RAV4',
    category: 'suv',
    price: {
      starting: 29200,
      currency: 'USD'
    },
    images: {
      main: 'https://via.placeholder.com/800x600/CC0000/FFFFFF?text=Toyota+RAV4',
      gallery: [
        'https://via.placeholder.com/800x600/CC0000/FFFFFF?text=RAV4+Interior',
        'https://via.placeholder.com/800x600/CC0000/FFFFFF?text=RAV4+Side',
        'https://via.placeholder.com/800x600/CC0000/FFFFFF?text=RAV4+Rear'
      ]
    },
    specifications: {
      engine: '2.5L 4-Cylinder',
      transmission: '8-Speed Automatic',
      fuelEconomy: '27 city / 35 highway mpg',
      seating: 5,
      drivetrain: 'AWD'
    },
    features: [
      'Toyota Safety Sense 2.0',
      'All-wheel drive',
      'Power liftgate',
      'Roof rails',
      '8-inch touchscreen'
    ],
    description: 'The Toyota RAV4 combines versatility, capability, and efficiency in a compact SUV perfect for any adventure.',
    available: true
  },
  {
    id: '3',
    name: 'Prius',
    category: 'hybrid',
    price: {
      starting: 28400,
      currency: 'USD'
    },
    images: {
      main: 'https://via.placeholder.com/800x600/00CC66/FFFFFF?text=Toyota+Prius',
      gallery: [
        'https://via.placeholder.com/800x600/00CC66/FFFFFF?text=Prius+Interior',
        'https://via.placeholder.com/800x600/00CC66/FFFFFF?text=Prius+Side',
        'https://via.placeholder.com/800x600/00CC66/FFFFFF?text=Prius+Rear'
      ]
    },
    specifications: {
      engine: '1.8L Hybrid',
      transmission: 'CVT Automatic',
      fuelEconomy: '58 city / 53 highway mpg',
      seating: 5,
      drivetrain: 'FWD'
    },
    features: [
      'Toyota Safety Sense 2.0',
      'Hybrid Synergy Drive',
      'Qi wireless charging',
      'SofTex-trimmed seats',
      'JBL audio system'
    ],
    description: 'The Toyota Prius pioneered hybrid technology and continues to lead with outstanding fuel efficiency and innovative design.',
    available: true
  },
  {
    id: '4',
    name: 'Corolla',
    category: 'sedan',
    price: {
      starting: 24300,
      currency: 'USD'
    },
    images: {
      main: 'https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Toyota+Corolla',
      gallery: [
        'https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Corolla+Interior',
        'https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Corolla+Side',
        'https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Corolla+Rear'
      ]
    },
    specifications: {
      engine: '2.0L 4-Cylinder',
      transmission: 'CVT Automatic',
      fuelEconomy: '31 city / 40 highway mpg',
      seating: 5,
      drivetrain: 'FWD'
    },
    features: [
      'Toyota Safety Sense 2.0',
      'Apple CarPlay/Android Auto',
      'Automatic climate control',
      'LED daytime running lights',
      'Remote keyless entry'
    ],
    description: 'The Toyota Corolla offers dependable performance, excellent fuel economy, and advanced safety in an affordable package.',
    available: true
  },
  {
    id: '5',
    name: 'Highlander',
    category: 'suv',
    price: {
      starting: 36400,
      currency: 'USD'
    },
    images: {
      main: 'https://via.placeholder.com/800x600/6600CC/FFFFFF?text=Toyota+Highlander',
      gallery: [
        'https://via.placeholder.com/800x600/6600CC/FFFFFF?text=Highlander+Interior',
        'https://via.placeholder.com/800x600/6600CC/FFFFFF?text=Highlander+Side',
        'https://via.placeholder.com/800x600/6600CC/FFFFFF?text=Highlander+Rear'
      ]
    },
    specifications: {
      engine: '3.5L V6',
      transmission: '8-Speed Automatic',
      fuelEconomy: '21 city / 29 highway mpg',
      seating: 8,
      drivetrain: 'AWD'
    },
    features: [
      'Toyota Safety Sense 2.0',
      '8-passenger seating',
      'Power liftgate',
      '12.3-inch touchscreen',
      'JBL premium audio'
    ],
    description: 'The Toyota Highlander provides spacious 3-row seating, impressive towing capacity, and the reliability you expect from Toyota.',
    available: true
  },
  {
    id: '6',
    name: 'Tacoma',
    category: 'truck',
    price: {
      starting: 28200,
      currency: 'USD'
    },
    images: {
      main: 'https://via.placeholder.com/800x600/996633/FFFFFF?text=Toyota+Tacoma',
      gallery: [
        'https://via.placeholder.com/800x600/996633/FFFFFF?text=Tacoma+Interior',
        'https://via.placeholder.com/800x600/996633/FFFFFF?text=Tacoma+Side',
        'https://via.placeholder.com/800x600/996633/FFFFFF?text=Tacoma+Rear'
      ]
    },
    specifications: {
      engine: '3.5L V6',
      transmission: '6-Speed Manual',
      fuelEconomy: '19 city / 24 highway mpg',
      seating: 5,
      drivetrain: '4WD'
    },
    features: [
      'Toyota Safety Sense P',
      'Multi-terrain select',
      'Crawl control',
      'Bed liner',
      'Tow hitch receiver'
    ],
    description: 'The Toyota Tacoma is built for adventure with off-road capability, durability, and the versatility to handle any job.',
    available: true
  }
];

export const getCarById = (id: string): CarModel | undefined => {
  return carModels.find(car => car.id === id);
};

export const getCarsByCategory = (category: string): CarModel[] => {
  return carModels.filter(car => car.category === category);
};