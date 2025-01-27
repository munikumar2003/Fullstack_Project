// Add 5 more products to the existing allProducts array
export const allProducts = [
  // ... existing products ...
  {
    id: 1,
    title: "iPhone 13 Pro",
    price: 999.99,
    originalPrice: 1299.99,
    description: "Latest iPhone with pro camera system and A15 Bionic chip",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Electronics",
    subCategory: "Mobiles",
    brand: "Apple",
    specifications: {
      "Display": "6.1-inch Super Retina XDR",
      "Processor": "A15 Bionic",
      "Camera": "Pro 12MP camera system",
      "Battery": "Up to 22 hours"
    },
    features: [
      "Pro camera system with new 12MP Telephoto",
      "A15 Bionic chip",
      "Super Retina XDR display with ProMotion",
      "Ceramic Shield front"
    ],
    rating: { rate: 4.8, count: 1234 },
  },
  {
    id: 2,
    title: "Samsung 4K Smart TV",
    price: 799.99,
    originalPrice: 999.99,
    description: "55-inch QLED display with smart features",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Electronics",
    subCategory: "TVs",
    brand: "Samsung",
    specifications: {
      "Display": "55-inch QLED 4K",
      "Resolution": "3840 x 2160",
      "Smart Features": "Built-in WiFi, Voice Control",
      "Ports": "4 HDMI, 2 USB"
    },
    features: [
      "Quantum Processor 4K",
      "100% Color Volume with Quantum Dot",
      "Ambient Mode",
      "Multiple Voice Assistants"
    ],
    rating: { rate: 4.5, count: 892 },
  },
  {
    id: 3,
    title: "Nike Air Max",
    price: 129.99,
    originalPrice: 159.99,
    description: "Comfortable running shoes with Air cushioning",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Fashion",
    subCategory: "Footwear",
    brand: "Nike",
    specifications: {
      "Material": "Mesh and synthetic upper",
      "Sole": "Rubber",
      "Cushioning": "Max Air unit",
      "Closure": "Lace-up"
    },
    features: [
      "Visible Air cushioning",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Padded collar and tongue"
    ],
    rating: { rate: 4.7, count: 2156 },
  },
  {
    id: 4,
    title: "Dell XPS 13",
    price: 1299.99,
    originalPrice: 1499.99,
    description: "Premium ultrabook with InfinityEdge display",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Electronics",
    subCategory: "Laptops",
    brand: "Dell",
    specifications: {
      "Processor": "Intel Core i7",
      "RAM": "16GB",
      "Storage": "512GB SSD",
      "Display": "13.4-inch 4K"
    },
    features: [
      "InfinityEdge display",
      "Thunderbolt 4 ports",
      "Backlit keyboard",
      "Windows 11 Pro"
    ],
    rating: { rate: 4.6, count: 789 },
  },
  {
    id: 5,
    title: "Sony WH-1000XM4",
    price: 349.99,
    originalPrice: 399.99,
    description: "Premium noise-cancelling headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Electronics",
    subCategory: "Audio",
    brand: "Sony",
    specifications: {
      "Battery Life": "30 hours",
      "Noise Cancelling": "Yes",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "254g"
    },
    features: [
      "Industry-leading noise cancellation",
      "Multipoint connection",
      "Touch controls",
      "Speak-to-chat"
    ],
    rating: { rate: 4.9, count: 3421 },
  },
  {
    id: 6,
    title: "MacBook Pro M2",
    price: 1299.99,
    originalPrice: 1499.99,
    description: "Latest MacBook Pro with M2 chip and stunning Retina display",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Electronics",
    subCategory: "Laptops",
    brand: "Apple",
    specifications: {
      "Processor": "Apple M2",
      "RAM": "16GB",
      "Storage": "512GB SSD",
      "Display": "14-inch Retina"
    },
    features: [
      "M2 chip with 8-core CPU",
      "14-inch Liquid Retina XDR display",
      "Up to 20 hours battery life",
      "Magic Keyboard with Touch ID"
    ],
    rating: { rate: 4.9, count: 856 },
  },
  {
    id: 7,
    title: "Canon EOS R5",
    price: 3499.99,
    originalPrice: 3899.99,
    description: "Professional mirrorless camera with 8K video capability",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Electronics",
    subCategory: "Cameras",
    brand: "Canon",
    specifications: {
      "Sensor": "45MP Full-Frame CMOS",
      "Video": "8K RAW",
      "AutoFocus": "Dual Pixel CMOS AF II",
      "Stabilization": "5-axis IBIS"
    },
    features: [
      "45MP full-frame sensor",
      "Continuing with the products data file exactly where we left off:",
      "8K RAW video recording",
      "Advanced animal AF",
      "High-speed continuous shooting"
    ],
    rating: { rate: 4.8, count: 342 },
  },
  {
    id: 8,
    title: "LG OLED C2 65-inch TV",
    price: 1999.99,
    originalPrice: 2499.99,
    description: "Premium 4K OLED TV with perfect blacks and incredible contrast",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1467293622093-9f15c96be70f?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Electronics",
    subCategory: "TVs",
    brand: "LG",
    specifications: {
      "Display": "65-inch 4K OLED",
      "HDR": "Dolby Vision IQ",
      "Processor": "α9 Gen5 AI",
      "Gaming": "4K 120Hz, VRR"
    },
    features: [
      "Perfect blacks with OLED technology",
      "AI-powered 4K upscaling",
      "HDMI 2.1 for gaming",
      "WebOS smart platform"
    ],
    rating: { rate: 4.7, count: 567 },
  },
  {
    id: 9,
    title: "Dyson V15 Detect",
    price: 699.99,
    originalPrice: 799.99,
    description: "Advanced cordless vacuum with laser dust detection",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Home & Furniture",
    subCategory: "Home & Furniture",
    brand: "Dyson",
    specifications: {
      "Runtime": "60 minutes",
      "Bin Volume": "0.76L",
      "Weight": "6.8 lbs",
      "Filtration": "HEPA"
    },
    features: [
      "Laser dust detection",
      "Piezo sensor",
      "HEPA filtration",
      "LCD screen"
    ],
    rating: { rate: 4.6, count: 423 },
  },
  {
    id: 10,
    title: "Samsung Galaxy Watch 6",
    price: 299.99,
    originalPrice: 349.99,
    description: "Advanced smartwatch with health monitoring features",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Electronics",
    subCategory: "Wearables",
    brand: "Samsung",
    specifications: {
      "Display": "1.4-inch Super AMOLED",
      "Battery": "40 hours",
      "Water Resistance": "5ATM + IP68",
      "Sensors": "ECG, BIA, HR"
    },
    features: [
      "Advanced sleep tracking",
      "Body composition analysis",
      "ECG monitoring",
      "Sports tracking"
    ],
    rating: { rate: 4.5, count: 678 },
  },
  {
    id: 11,
    title: "Men's Leather Jacket",
    price: 199.99,
    originalPrice: 249.99,
    description: "Stylish leather jacket for men with a sleek design.",
    image: "https://images.unsplash.com/photo-1601461883809-d2d300f9a0fc?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1601461883809-d2d300f9a0fc?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1592424935190-058adf497784?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1594780408489-68fc69769b9e?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Fashion",
    subCategory: "Jackets",
    brand: "LeatherX",
    specifications: {
      "Material": "Genuine Leather",
      "Color": "Black",
      "Size": "M, L, XL",
      "Care": "Dry clean only"
    },
    features: [
      "High-quality leather",
      "Sleek and stylish design",
      "Comfortable fit",
      "Perfect for colder weather"
    ],
    rating: { rate: 4.6, count: 320 },
  },
  {
    id: 12,
    title: "Women's Summer Dress",
    price: 49.99,
    originalPrice: 79.99,
    description: "A breezy summer dress perfect for casual outings.",
    image: "https://images.unsplash.com/photo-1594727402990-72d10d9986a5?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1594727402990-72d10d9986a5?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1589480800522-2a693ee91d4d?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1592382346791-59a3006979e2?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Fashion",
    subCategory: "Dresses",
    brand: "FloralBliss",
    specifications: {
      "Material": "Cotton",
      "Color": "Pink",
      "Size": "S, M, L",
      "Care": "Machine wash"
    },
    features: [
      "Light and breathable fabric",
      "Floral print design",
      "Perfect for casual summer days",
      "Comfortable fit"
    ],
    rating: { rate: 4.5, count: 110 },
  },
  {
    id: 13,
    title: "Classic Denim Jeans",
    price: 59.99,
    originalPrice: 79.99,
    description: "Versatile and stylish denim jeans for everyday wear.",
    image: "https://images.unsplash.com/photo-1594783654354-5b35a29f1552?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1594783654354-5b35a29f1552?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1610980654825-755f62565016?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1595227324701-b1f7db1a8463?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Fashion",
    subCategory: "Jeans",
    brand: "DenimCo",
    specifications: {
      "Material": "Denim",
      "Color": "Blue",
      "Size": "S, M, L, XL",
      "Care": "Machine wash"
    },
    features: [
      "Classic fit",
      "Durable denim",
      "Ideal for everyday wear",
      "Comfortable and stylish"
    ],
    rating: { rate: 4.7, count: 290 },
  },
  {
    id: 14,
    title: "Men's Running Shoes",
    price: 69.99,
    originalPrice: 99.99,
    description: "High-performance running shoes designed for comfort and speed.",
    image: "https://images.unsplash.com/photo-1598250920743-28762e8a4174?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1598250920743-28762e8a4174?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1584392038830-48d9b07d0df2?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1593171135192-e8ba9388e48e?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Fashion",
    subCategory: "Footwear",
    brand: "SportFlex",
    specifications: {
      "Material": "Mesh & Rubber",
      "Color": "Red",
      "Size": "7, 8, 9, 10, 11",
      "Care": "Wipe with a damp cloth"
    },
    features: [
      "Breathable mesh",
      "Durable rubber sole",
      "Perfect for running and workouts",
      "Comfortable and lightweight"
    ],
    rating: { rate: 4.8, count: 540 },
  },
  {
    id: 15,
    title: "Women's Winter Coat",
    price: 129.99,
    originalPrice: 159.99,
    description: "Warm and stylish coat for the winter season.",
    image: "https://images.unsplash.com/photo-1603078783231-5f8f3cf7a1d7?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1603078783231-5f8f3cf7a1d7?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1595297196011-c399ff685121?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1590285882264-57f7f53d3303?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Fashion",
    subCategory: "Coats",
    brand: "WinterWarm",
    specifications: {
      "Material": "Wool Blend",
      "Color": "Navy Blue",
      "Size": "S, M, L, XL",
      "Care": "Dry clean only"
    },
    features: [
      "Thermal insulation",
      "Elegant and timeless design",
      "Perfect for cold weather",
      "Soft and cozy"
    ],
    rating: { rate: 4.9, count: 380 },
  },
  {
    id: 16,
    title: "Men's Casual T-Shirt",
    price: 19.99,
    originalPrice: 29.99,
    description: "A basic yet comfortable t-shirt for casual wear.",
    image: "https://images.unsplash.com/photo-1601572687472-5a47f2a08a6f?auto=format&fit=crop&q=80&w=400",
    images: [
      "https://images.unsplash.com/photo-1601572687472-5a47f2a08a6f?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1604054726314-26b628bfa14c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1605350755529-6f7a1a1b6f83?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Fashion",
    subCategory: "T-Shirts",
    brand: "CasualWear",
    specifications: {
      "Material": "Cotton",
      "Color": "Gray",
      "Size": "M, L, XL",
      "Care": "Machine wash"
    },
    features: [
      "Soft cotton fabric",
      "Comfortable and lightweight",
      "Versatile design",
      "Perfect for casual outings"
    ],
    rating: { rate: 4.4, count: 230 },
  },
  {
  id: 17,
  title: "Modern Sofa Set",
  price: 499.99,
  originalPrice: 699.99,
  description: "Comfortable and stylish sofa set to enhance your living room.",
  image: "https://images.unsplash.com/photo-1592744935241-f0b91ea191ec?auto=format&fit=crop&q=80&w=400",
  images: [
    "https://images.unsplash.com/photo-1592744935241-f0b91ea191ec?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1595646399449-0a3adf2a5a9b?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1572544362521-d62501c57eeb?auto=format&fit=crop&q=80&w=400"
  ],
  category: "Home & Furniture",
  subCategory: "Living Room",
  brand: "HomeEase",
  specifications: {
    "Material": "Fabric & Wood",
    "Color": "Gray",
    "Size": "Sofa (3 seats)",
    "Care": "Spot clean with damp cloth"
  },
  features: [
    "Comfortable cushions",
    "Stylish design",
    "Durable fabric",
    "Perfect for family rooms"
  ],
  rating: { rate: 4.7, count: 310 },
},
{
  id: 18,
  title: "Wooden Dining Table",
  price: 299.99,
  originalPrice: 399.99,
  description: "Elegant wooden dining table that fits perfectly in any dining room.",
  image: "https://images.unsplash.com/photo-1579764243521-d7a1d82a3015?auto=format&fit=crop&q=80&w=400",
  images: [
    "https://images.unsplash.com/photo-1579764243521-d7a1d82a3015?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1597771001182-21c99d2f4705?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1600377230835-bdb4e69a31fa?auto=format&fit=crop&q=80&w=400"
  ],
  category: "Home & Furniture",
  subCategory: "Dining Room",
  brand: "WoodCraft",
  specifications: {
    "Material": "Wood",
    "Color": "Brown",
    "Size": "6 seats",
    "Care": "Wipe with dry cloth"
  },
  features: [
    "Sturdy wooden construction",
    "Sleek and elegant design",
    "Seats up to 6 people",
    "Perfect for family meals"
  ],
  rating: { rate: 4.8, count: 220 },
},
  {
    id: 19,
    title: "Coffee Maker",
    price: 49.99,
    originalPrice: 79.99,
    description: "Automatic coffee maker with programmable settings.",
    images: [
      "https://images.unsplash.com/photo-1590401302635-d36550c9e6db?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1580505217689-606b3f11f0d4?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Appliances",
    subCategory: "Kitchen",
    brand: "BrewMaster",
    specifications: {
      "Capacity": "1.5L",
      "Color": "Black",
      "Power": "1000W",
      "Features": "Auto shut-off, Brew strength control"
    },
    features: [
      "Convenient operation",
      "Makes rich coffee",
      "Programmable timer",
      "Easy to clean"
    ],
    rating: { rate: 4.5, count: 130 },
  },
  {
    id: 20,
    title: "Hair Dryer",
    price: 39.99,
    originalPrice: 59.99,
    description: "Powerful hair dryer with multiple heat settings.",
    images: [
      "https://images.unsplash.com/photo-1576190506685-bd78e93735ae?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1571320982357-986d5c5adfc4?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Appliances",
    subCategory: "Personal Care",
    brand: "HairPro",
    specifications: {
      "Power": "1500W",
      "Color": "Pink",
      "Features": "Cool shot button, Multiple speed settings"
    },
    features: [
      "Quick drying",
      "Multiple heat options",
      "Compact and lightweight",
      "Cool shot feature"
    ],
    rating: { rate: 4.6, count: 220 },
  },
  {
    id: 21,
    title: "Microwave Oven",
    price: 89.99,
    originalPrice: 129.99,
    description: "Compact microwave oven with multiple cooking modes.",
    images: [
      "https://images.unsplash.com/photo-1574087303472-6633d7f2b951?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1575634681225-410b7b5e5a6d?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Appliances",
    subCategory: "Kitchen",
    brand: "QuickHeat",
    specifications: {
      "Capacity": "20L",
      "Color": "White",
      "Power": "800W",
      "Features": "Auto defrost, 10 power levels"
    },
    features: [
      "Even cooking",
      "Compact size",
      "User-friendly interface",
      "Defrosting functionality"
    ],
    rating: { rate: 4.4, count: 150 },
  },
  {
    id: 22,
    title: "Blender",
    price: 29.99,
    originalPrice: 49.99,
    description: "Powerful blender for smoothies and shakes.",
    images: [
      "https://images.unsplash.com/photo-1572466436364-48b35ff72d74?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1572466436448-d25cb99ab660?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Appliances",
    subCategory: "Kitchen",
    brand: "SmoothMix",
    specifications: {
      "Capacity": "1.5L",
      "Power": "700W",
      "Color": "Black",
      "Features": "Easy clean, Multiple speeds"
    },
    features: [
      "Perfect for smoothies",
      "Multi-purpose blending",
      "Easy to clean",
      "Space-saving design"
    ],
    rating: { rate: 4.7, count: 180 },
  },
  {
    id: 23,
    title: "Vacuum Cleaner",
    price: 129.99,
    originalPrice: 199.99,
    description: "Cordless vacuum cleaner with strong suction power.",
    images: [
      "https://images.unsplash.com/photo-1612467060667-010b21bc62c1?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1607889224500-f52c2e0c49fa?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Appliances",
    subCategory: "Cleaning",
    brand: "CleanMaster",
    specifications: {
      "Battery": "Li-ion, 2000mAh",
      "Color": "Blue",
      "Suction Power": "120AW",
      "Features": "Cordless, Lightweight"
    },
    features: [
      "Cordless design",
      "Strong suction",
      "Lightweight and easy to use",
      "Ideal for small spaces"
    ],
    rating: { rate: 4.8, count: 220 },
  },
  {
    id: 25,
    title: "Dishwasher",
    price: 399.99,
    originalPrice: 499.99,
    description: "Efficient dishwasher with multiple wash programs.",
    images: [
      "https://images.unsplash.com/photo-1576501457080-1e9f9b2be0e5?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1581041244002-b021b051551d?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Appliances",
    subCategory: "Kitchen",
    brand: "CleanDish",
    specifications: {
      "Capacity": "12 Place Settings",
      "Color": "Silver",
      "Power": "1200W",
      "Features": "Energy-efficient, Multiple wash cycles"
    },
    features: [
      "Quiet operation",
      "Multiple washing options",
      "Energy-saving design",
      "Efficient drying"
    ],
    rating: { rate: 4.3, count: 150 },
  },
  {
    id: 26,
    title: "Air Purifier",
    price: 149.99,
    originalPrice: 229.99,
    description: "High-performance air purifier with HEPA filter.",
    images: [
      "https://images.unsplash.com/photo-1574062476-25bbf0a504b1?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1581312390081-bf3e94432c06?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Appliances",
    subCategory: "Home",
    brand: "PureAir",
    specifications: {
      "Coverage": "400 sq. ft.",
      "Color": "White",
      "Filter": "HEPA",
      "Features": "Quiet mode, Energy-saving"
    },
    features: [
      "HEPA filter",
      "Cleans air effectively",
      "Quiet operation",
      "Perfect for allergy sufferers"
    ],
    rating: { rate: 4.6, count: 110 },
  },
  {
    id: 27,
    title: "Toaster",
    price: 24.99,
    originalPrice: 39.99,
    description: "Compact toaster with multiple browning settings.",
    images: [
      "https://images.unsplash.com/photo-1580504579301-c63641fe865f?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1594243463645-4778f6a99d04?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Appliances",
    subCategory: "Kitchen",
    brand: "ToastMaster",
    specifications: {
      "Slots": "2",
      "Color": "Silver",
      "Features": "Adjustable browning control"
    },
    features: [
      "Compact design",
      "Multiple browning settings",
      "Fast toasting",
      "Easy to clean"
    ],
    rating: { rate: 4.7, count: 200 },
  },
  {
    id: 28,
    title: "Lip Balm",
    price: 5.99,
    originalPrice: 9.99,
    description: "Mint-flavored lip balm for hydration and protection.",
    images: [
      "https://images.unsplash.com/photo-1586190794132-b801be92e1b8?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1593775822736-c59de3ba8fa7?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Beauty & Personal Care",
    subCategory: "Lip Care",
    brand: "SoftLips",
    specifications: {
      "Type": "Lip Balm",
      "Flavor": "Mint",
      "Size": "10g",
      "Features": "Hydrating, Long-lasting"
    },
    features: [
      "Softens lips",
      "Keeps lips hydrated",
      "Long-lasting moisture",
      "Pleasant mint flavor"
    ],
    rating: { rate: 4.8, count: 300 },
  },
  {
    id: 29,
    title: "Face Cream",
    price: 19.99,
    originalPrice: 29.99,
    description: "Moisturizing face cream for all skin types.",
    images: [
      "https://images.unsplash.com/photo-1589834086153-0922e214f1de?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1581304068027-dbf60bb74c6c?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Beauty & Personal Care",
    subCategory: "Skin Care",
    brand: "GlowSkin",
    specifications: {
      "Type": "Moisturizer",
      "Size": "50g",
      "Features": "Hydrating, Nourishing"
    },
    features: [
      "Hydrates skin",
      "Keeps skin soft",
      "Suitable for all skin types",
      "Nourishing ingredients"
    ],
    rating: { rate: 4.7, count: 220 },
  },
  {
    id: 30,
    title: "Nail Polish",
    price: 8.99,
    originalPrice: 14.99,
    description: "High-shine, chip-resistant nail polish.",
    images: [
      "https://images.unsplash.com/photo-1593584960452-5fc863f69b5e?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1592240153514-bb4fdc3a5a9a?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Beauty & Personal Care",
    subCategory: "Nail Care",
    brand: "PolishPerfect",
    specifications: {
      "Type": "Nail Polish",
      "Size": "15mL",
      "Features": "Chip-resistant, High-shine"
    },
    features: [
      "High-shine finish",
      "Long-lasting",
      "Chip-resistant formula",
      "Easy to apply"
    ],
    rating: { rate: 4.9, count: 150 },
  },
  {
    id: 31,
    title: "Shampoo",
    price: 9.99,
    originalPrice: 14.99,
    description: "Sulfate-free shampoo for all hair types.",
    images: [
      "https://images.unsplash.com/photo-1591846990602-d8889bdf7e61?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1585575122402-46437b13d5e3?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Beauty & Personal Care",
    subCategory: "Hair Care",
    brand: "PureShine",
    specifications: {
      "Type": "Shampoo",
      "Size": "250mL",
      "Features": "Sulfate-free, Nourishing"
    },
    features: [
      "Gentle formula",
      "Sulfate-free",
      "Keeps hair shiny",
      "Suitable for all hair types"
    ],
    rating: { rate: 4.6, count: 180 },
  },
  {
    id: 32,
    title: "Conditioner",
    price: 7.99,
    originalPrice: 12.99,
    description: "Moisturizing conditioner for soft and healthy hair.",
    images: [
      "https://images.unsplash.com/photo-1581395602292-7a0e396ad0d5?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1591064095359-3bc5c4b8b457?auto=format&fit=crop&q=80&w=400"
    ],
    category: "Beauty & Personal Care",
    subCategory: "Hair Care",
    brand: "SilkGlow",
    specifications: {
      "Type": "Conditioner",
      "Size": "250mL",
      "Features": "Moisturizing, Nourishing"
    },
    features: [
      "Deeply moisturizing",
      "Keeps hair soft",
      "Nourishing ingredients",
      "Suitable for all hair types"
    ],
    rating: { rate: 4.7, count: 210 },
  }

];