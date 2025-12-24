export const featuredRestaurants = [
  {
    id: '1',
    name: 'Burger Hub',
    rating: 4.7,
    reviews: 1250,
    category: 'Burgers • Fast Food',
    time: '25-30 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,

    address: {
      line1: '12 MG Road',
      area: 'Indiranagar',
      city: 'Bengaluru',
      pincode: '560038',
    },

    contact: {
      phone: '+91 98765 43210',
    },

    tags: ['Best Seller', 'Fast Delivery'],

    image: require('../assets/images/restaurants/pexels-chanwalrus-941861.jpg'),

    foods: [
      {
        id: 'f1',
        name: 'Classic Chicken Burger',
        price: 199,
        rating: 4.6,
        isVeg: false,
        // image: require('../assets/images/foods/burger1.jpg'),
      },
      {
        id: 'f2',
        name: 'Cheese Veg Burger',
        price: 179,
        rating: 4.4,
        isVeg: true,
        // image: require('../assets/images/foods/burger2.jpg'),
      },
      {
        id: 'f3',
        name: 'French Fries',
        price: 99,
        rating: 4.3,
        isVeg: true,
        // image: require('../assets/images/foods/fries.jpg'),
      },
    ],
  },

  {
    id: '2',
    name: 'Green Bowl',
    rating: 4.5,
    reviews: 820,
    category: 'Healthy • Salads',
    time: '20-25 min',
    price: '$$',
    delivery: '₹20 delivery',
    isOpen: true,

    address: {
      line1: '45 Park Street',
      area: 'Salt Lake',
      city: 'Kolkata',
      pincode: '700091',
    },

    contact: {
      phone: '+91 91234 56789',
    },

    tags: ['Healthy Choice', 'Low Cal'],

    image: require('../assets/images/restaurants/pexels-chanwalrus-958547.jpg'),

    foods: [
      {
        id: 'f4',
        name: 'Quinoa Veg Bowl',
        price: 249,
        rating: 4.5,
        isVeg: true,
        // image: require('../assets/images/foods/salad1.jpg'),
      },
      {
        id: 'f5',
        name: 'Grilled Chicken Salad',
        price: 299,
        rating: 4.6,
        isVeg: false,
        // image: require('../assets/images/foods/salad2.jpg'),
      },
    ],
  },

  {
    id: '3',
    name: 'Pizza Station',
    rating: 4.8,
    reviews: 2100,
    category: 'Pizza • Italian',
    time: '30-35 min',
    price: '$$$',
    delivery: 'Free delivery',
    isOpen: false,

    address: {
      line1: '88 Linking Road',
      area: 'Bandra West',
      city: 'Mumbai',
      pincode: '400050',
    },

    contact: {
      phone: '+91 99887 66554',
    },

    tags: ['Top Rated', 'Italian'],

    image: require('../assets/images/restaurants/pexels-huy-phan-316220-1383776.jpg'),

    foods: [
      {
        id: 'f6',
        name: 'Margherita Pizza',
        price: 349,
        rating: 4.7,
        isVeg: true,
        // image: require('../assets/images/foods/pizza1.jpg'),
      },
      {
        id: 'f7',
        name: 'Pepperoni Pizza',
        price: 399,
        rating: 4.8,
        isVeg: false,
        // image: require('../assets/images/foods/pizza2.jpg'),
      },
    ],
  },
];


// =========
export const popularDishes = [
  {
    id: '1',
    name: 'Cheese Burger',
    rating: 4.8,
    category: 'Burger • Fast Food',
    price: '$5.99',
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    rating: 4.7,
    category: 'Pizza • Italian',
    price: '$8.99',
  },
  {
    id: '3',
    name: 'Caesar Salad',
    rating: 4.5,
    category: 'Healthy • Salads',
    price: '$6.49',
  },
];

export const offers = [
  {
    id: '1',
    title: '20% Off on Pizzas',
    description: 'Valid on all pizzas',
    code: 'PIZZA20',
  },
  {
    id: '2',
    title: 'Free Delivery',
    description: 'On orders above $20',
    code: 'FREEDEL',
  },
  {
    id: '3',
    title: 'Buy 1 Get 1',
    description: 'On selected burgers',
    code: 'BOGO',
  },
];

export const quickBites = [
  {
    id: '1',
    name: 'Fries',
    rating: 4.6,
    category: 'Snacks',
    time: '10 min',
    price: '$2.99',
  },
  {
    id: '2',
    name: 'Chicken Nuggets',
    rating: 4.4,
    category: 'Snacks',
    time: '15 min',
    price: '$4.99',
  },
  {
    id: '3',
    name: 'Ice Cream',
    rating: 4.9,
    category: 'Dessert',
    time: '5 min',
    price: '$3.49',
  },
];

export const bannerData = [
  {
    id: '1',
    image: require('../assets/images/Black and Yellow Simple Minimalist Burger Promotion Banner.png'),
  },
  {
    id: '2',
    image: require('../assets/images/Black White Simple Opening Banner.png'),
  },
  {
    id: '3',
    image: require('../assets/images/Red Modern Fried Chicken Grand Opening Promotion Banner.png'),
  },
  {
    id: '4',
    image: require('../assets/images/Red White Simple Minimalist Illustrative Pizza Promotion Banner.png'),
  },
];
