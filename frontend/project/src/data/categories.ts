import { Laptop, Smartphone, Tv, Headphones, Camera, Watch, Shirt, Shovel as Shoe, Gift, Baby, Home, ShoppingBag, BookOpen, Dumbbell, Car, Plane } from 'lucide-react';

export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'Smartphone',
    subCategories: [
      {
        id: 'mobiles',
        name: 'Mobiles',
        brands: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Realme']
      },
      {
        id: 'laptops',
        name: 'Laptops',
        brands: ['HP', 'Dell', 'Lenovo', 'Apple', 'Asus']
      },
      {
        id: 'tvs',
        name: 'Televisions',
        brands: ['Samsung', 'LG', 'Sony', 'Mi', 'OnePlus']
      }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: 'Shirt',
    subCategories: [
      {
        id: 'mens',
        name: "Men's Wear",
        brands: ['Levi\'s', 'Nike', 'Adidas', 'Puma', 'H&M']
      },
      {
        id: 'womens',
        name: "Women's Wear",
        brands: ['Zara', 'H&M', 'Forever 21', 'Mango', 'Vero Moda']
      },
      {
        id: 'kids',
        name: "Kids' Wear",
        brands: ['Carter\'s', 'Disney', 'Gap Kids', 'H&M Kids']
      }
    ]
  },
  {
    id: 'appliances',
    name: 'Appliances',
    icon: 'Tv',
    subCategories: [
      {
        id: 'ac',
        name: 'Air Conditioners',
        brands: ['Daikin', 'Voltas', 'LG', 'Samsung', 'Carrier']
      },
      {
        id: 'refrigerators',
        name: 'Refrigerators',
        brands: ['LG', 'Samsung', 'Whirlpool', 'Haier', 'Godrej']
      }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    icon: 'Gift',
    subCategories: [
      {
        id: 'makeup',
        name: 'Makeup',
        brands: ['Maybelline', 'L\'Oreal', 'MAC', 'Lakme', 'NYX']
      },
      {
        id: 'skincare',
        name: 'Skincare',
        brands: ['The Face Shop', 'Neutrogena', 'Nivea', 'Garnier']
      }
    ]
  },
  {
    id: 'home',
    name: 'Home & Furniture',
    icon: 'Home',
    subCategories: [
      {
        id: 'furniture',
        name: 'Furniture',
        brands: ['IKEA', 'Urban Ladder', 'Pepperfry', 'Godrej Interio']
      },
      {
        id: 'decor',
        name: 'Home Decor',
        brands: ['HomeTown', 'D\'Decor', 'Urban Ladder', 'MyHome']
      }
    ]
  }
];