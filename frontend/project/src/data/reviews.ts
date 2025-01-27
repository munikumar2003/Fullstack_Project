type Review = {
  id: number;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
};

type ReviewsMap = { [key: number]: Review[] };

const reviews: ReviewsMap = {
  1: [ // Product ID 1
    {
      id: 1,
      userId: "user1",
      userName: "John Doe",
      rating: 5,
      comment: "Amazing phone with great camera quality",
      date: "2024-03-01",
      helpful: 45
    },
    {
      id: 2,
      userId: "user2",
      userName: "Jane Smith",
      rating: 4,
      comment: "Good phone but a bit expensive",
      date: "2024-02-28",
      helpful: 32
    }
  ],
  2: [
    {
        id: 1,
        userId: "user3",
        userName: "Mike Johnson",
        rating: 5,
        comment: "Excellent picture quality and smart features",
        date: "2024-03-02",
        helpful: 28
      }
    ],
  3 : [
    {
        id: 1,
        userId: "user4",
        userName: "Sarah Wilson",
        rating: 5,
        comment: "Most comfortable shoes I've ever worn",
        date: "2024-03-01",
        helpful: 56
      }
  ],
  4 : [
    {
        id: 1,
        userId: "user5",
        userName: "David Brown",
        rating: 5,
        comment: "Perfect laptop for professionals",
        date: "2024-03-03",
        helpful: 34
      }
  ],
  5 : [
    {
        id: 1,
        userId: "user6",
        userName: "Emma Davis",
        rating: 5,
        comment: "Best noise-cancelling headphones ever",
        date: "2024-03-04",
        helpful: 89
      }
  ],
  6 : [
     {
        id: 1,
        userId: "user7",
        userName: "Michael Brown",
        rating: 5,
        comment: "Best laptop I've ever owned",
        date: "2024-03-05",
        helpful: 67
      }
  ],
  7 : [
    {
        id: 1,
        userId: "user8",
        userName: "Jennifer Lee",
        rating: 5,
        comment: "Amazing camera for both photos and videos",
        date: "2024-03-06",
        helpful: 45
      }
  ],
  8 : [
    {
        id: 1,
        userId: "user9",
        userName: "Robert Wilson",
        rating: 5,
        comment: "Best TV I've ever owned, amazing picture quality",
        date: "2024-03-07",
        helpful: 89
      }
  ],
  9 : [
    {
        id: 1,
        userId: "user10",
        userName: "Alice Thompson",
        rating: 5,
        comment: "Revolutionary vacuum cleaner, worth every penny",
        date: "2024-03-08",
        helpful: 56
      }
  ],
  10 : [
    {
        id: 1,
        userId: "user11",
        userName: "David Chen",
        rating: 4,
        comment: "Great smartwatch with comprehensive health features",
        date: "2024-03-09",
        helpful: 34
      }
  ],
  11: [
    {
        id: 1,
        userId: "user3",
        userName: "Alice Brown",
        rating: 5,
        comment: "Love the fit and feel, perfect for winter!",
        date: "2024-03-10",
        helpful: 12
      },
      {
        id: 2,
        userId: "user4",
        userName: "Tom Harris",
        rating: 4,
        comment: "Good quality, but wish it came in more colors.",
        date: "2024-03-05",
        helpful: 8
      }
  ],
  12 : [
    {
        id: 1,
        userId: "user5",
        userName: "Sophia White",
        rating: 5,
        comment: "Super comfortable and perfect for a hot day.",
        date: "2024-03-02",
        helpful: 15
      },
      {
        id: 2,
        userId: "user6",
        userName: "Liam Green",
        rating: 4,
        comment: "Great dress but size runs a bit small.",
        date: "2024-02-28",
        helpful: 9
      }
  ],
  13 : [
    {
        id: 1,
        userId: "user7",
        userName: "Ella Martin",
        rating: 5,
        comment: "Great fit, goes well with everything!",
        date: "2024-03-07",
        helpful: 22
      },
      {
        id: 2,
        userId: "user8",
        userName: "Jack Scott",
        rating: 4,
        comment: "Good quality jeans, but a bit tight around the waist.",
        date: "2024-02-20",
        helpful: 18
      }
  ],
  14 : [
    {
        id: 1,
        userId: "user9",
        userName: "Benjamin Lee",
        rating: 5,
        comment: "Incredibly comfortable and lightweight.",
        date: "2024-02-15",
        helpful: 28
      },
      {
        id: 2,
        userId: "user10",
        userName: "Emily Davis",
        rating: 4,
        comment: "Great shoes, but the sizing runs large.",
        date: "2024-02-10",
        helpful: 20
      }
  ],
  15 : [
    {
        id: 1,
        userId: "user11",
        userName: "Ava Taylor",
        rating: 5,
        comment: "Keeps me warm and stylish at the same time.",
        date: "2024-03-01",
        helpful: 34
      },
      {
        id: 2,
        userId: "user12",
        userName: "Isabella Clark",
        rating: 4,
        comment: "Great coat but a little too bulky for my taste.",
        date: "2024-02-25",
        helpful: 22
      }
  ],
  16 : [
    {
        id: 1,
        userId: "user13",
        userName: "Noah Harris",
        rating: 5,
        comment: "Great fit and very comfortable.",
        date: "2024-02-10",
        helpful: 16
      },
      {
        id: 2,
        userId: "user14",
        userName: "Lucas Walker",
        rating: 4,
        comment: "Nice t-shirt, but the material could be softer.",
        date: "2024-02-05",
        helpful: 12
      }
  ],
  17: [
    {
      id: 1,
      userId: "user1",
      userName: "Grace Miller",
      rating: 5,
      comment: "The sofa is so comfortable and looks amazing!",
      date: "2024-01-25",
      helpful: 18
    },
    {
      id: 2,
      userId: "user2",
      userName: "Daniel Evans",
      rating: 4,
      comment: "Good quality, but it took a little longer to assemble.",
      date: "2024-01-22",
      helpful: 12
    }
  ],
  18 : [
    {
      id: 1,
      userId: "user3",
      userName: "Olivia Adams",
      rating: 5,
      comment: "Beautiful table, perfect for family gatherings.",
      date: "2024-01-15",
      helpful: 21
    },
    {
      id: 2,
      userId: "user4",
      userName: "Mason Baker",
      rating: 4,
      comment: "Nice table, but wish it came in more color options.",
      date: "2024-01-12",
      helpful: 14
    }
  ],
  19 : [
    {
        id: 1,
        userId: "user13",
        userName: "Ava Moore",
        rating: 5,
        comment: "Love the programmable timer feature!",
        date: "2024-02-10",
        helpful: 20
      },
      {
        id: 2,
        userId: "user14",
        userName: "Oliver Jackson",
        rating: 4,
        comment: "Makes great coffee but takes a while to brew.",
        date: "2024-02-12",
        helpful: 15
      }
  ],
  20 : [
    {
        id: 1,
        userId: "user15",
        userName: "Evelyn Clark",
        rating: 5,
        comment: "My go-to hair dryer, dries my hair quickly!",
        date: "2024-02-15",
        helpful: 30
      },
      {
        id: 2,
        userId: "user16",
        userName: "Henry Lewis",
        rating: 4,
        comment: "Good dryer, but would prefer it to be quieter.",
        date: "2024-02-18",
        helpful: 25
      }
  ],
  21 : [
    {
        id: 1,
        userId: "user17",
        userName: "Sophia White",
        rating: 5,
        comment: "Perfect size for my small kitchen and works great!",
        date: "2024-02-20",
        helpful: 28
      },
      {
        id: 2,
        userId: "user18",
        userName: "Liam Johnson",
        rating: 4,
        comment: "Good microwave, but a little slow on defrosting.",
        date: "2024-02-22",
        helpful: 18
      }
  ],
  22 : [
     {
        id: 1,
        userId: "user19",
        userName: "Charlotte Martin",
        rating: 5,
        comment: "Makes perfect smoothies every time!",
        date: "2024-02-25",
        helpful: 22
      },
      {
        id: 2,
        userId: "user20",
        userName: "Mason Harris",
        rating: 4,
        comment: "Good product, but a little noisy.",
        date: "2024-02-28",
        helpful: 15
      }
  ],
  23 : [
    {
        id: 1,
        userId: "user21",
        userName: "Ella Lewis",
        rating: 5,
        comment: "Great for quick cleaning sessions!",
        date: "2024-03-01",
        helpful: 35
      },
      {
        id: 2,
        userId: "user22",
        userName: "Lucas Young",
        rating: 4,
        comment: "Works well, but the battery could last longer.",
        date: "2024-03-03",
        helpful: 30
      }
  ],
  25 : [
    {
        id: 1,
        userId: "user23",
        userName: "Amelia Allen",
        rating: 5,
        comment: "Cleans dishes perfectly and is very quiet!",
        date: "2024-03-05",
        helpful: 25
      },
      {
        id: 2,
        userId: "user24",
        userName: "Jack Carter",
        rating: 4,
        comment: "Works great, but a bit expensive.",
        date: "2024-03-08",
        helpful: 18
      }
  ],
  26 : [
    {
        id: 1,
        userId: "user25",
        userName: "Isabella Brown",
        rating: 5,
        comment: "Great air purifier, very quiet and efficient!",
        date: "2024-03-10",
        helpful: 20
      },
      {
        id: 2,
        userId: "user26",
        userName: "Benjamin Smith",
        rating: 4,
        comment: "Good product but can be a bit noisy on higher settings.",
        date: "2024-03-12",
        helpful: 15
      }
  ],
  27 : [
    {
        id: 1,
        userId: "user27",
        userName: "Lucas White",
        rating: 5,
        comment: "Perfect toaster for daily use!",
        date: "2024-03-15",
        helpful: 22
      },
      {
        id: 2,
        userId: "user28",
        userName: "Mia Wilson",
        rating: 4,
        comment: "Great product, but wish it could toast more slices.",
        date: "2024-03-17",
        helpful: 18
      }
  ],
  28 : [
    {
        id: 1,
        userId: "user10",
        userName: "Lily Adams",
        rating: 5,
        comment: "I can't live without this balm, it works wonders!",
        date: "2024-02-05",
        helpful: 35
      },
      {
        id: 2,
        userId: "user11",
        userName: "James Wilson",
        rating: 4,
        comment: "Good product, but I wish it lasted longer.",
        date: "2024-02-07",
        helpful: 28
      }
  ],
  29 : [
    {
        id: 1,
        userId: "user12",
        userName: "Avery Lee",
        rating: 5,
        comment: "My skin feels so smooth after using this cream!",
        date: "2024-02-09",
        helpful: 25
      },
      {
        id: 2,
        userId: "user13",
        userName: "Ethan Green",
        rating: 4,
        comment: "Good moisturizer, but I prefer something lighter.",
        date: "2024-02-11",
        helpful: 20
      }
  ],
  30 : [
    {
        id: 1,
        userId: "user14",
        userName: "Sophie Walker",
        rating: 5,
        comment: "Amazing nail polish, stays shiny for days!",
        date: "2024-02-14",
        helpful: 30
      },
      {
        id: 2,
        userId: "user15",
        userName: "Oliver King",
        rating: 4,
        comment: "Good quality, but takes a little long to dry.",
        date: "2024-02-17",
        helpful: 25
      }
  ],
  31 : [
    {
        id: 1,
        userId: "user16",
        userName: "Charlotte Scott",
        rating: 5,
        comment: "Love this shampoo! My hair feels so soft.",
        date: "2024-02-20",
        helpful: 40
      },
      {
        id: 2,
        userId: "user17",
        userName: "Liam Green",
        rating: 4,
        comment: "Good shampoo, but the scent could be better.",
        date: "2024-02-22",
        helpful: 30
      }
  ],
  32 : [
    {
        id: 1,
        userId: "user18",
        userName: "Ella Turner",
        rating: 5,
        comment: "This conditioner works wonders! My hair is so smooth.",
        date: "2024-02-25",
        helpful: 35
      },
      {
        id: 2,
        userId: "user19",
        userName: "Lucas Davis",
        rating: 4,
        comment: "Good conditioner, but I wish it was a little thicker.",
        date: "2024-02-28",
        helpful: 30
      }
  ],
  // Add more product reviews here
};

export const getProductReviews = (productId: number): Review[] => {
  return reviews[productId] || [];
};

export const addReview = (productId: number, review: Omit<Review, 'id' | 'date'>): void => {
  if (!reviews[productId]) {
    reviews[productId] = [];
  }
  reviews[productId].push({
    ...review,
    id: Date.now(),
    date: new Date().toISOString().split('T')[0],
  });
};