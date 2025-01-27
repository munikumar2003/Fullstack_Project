export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  category: string;
  subCategory: string;
  brand: string;
  specifications: {
    [key: string]: string;
  };
  features: string[];
  rating: {
    rate: number;
    count: number;
  };
  reviews: Review[];
}

export interface Review {
  id: number;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  brands: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface CarouselItem {
  id: number;
  image: string;
  title: string;
  link: string;
}