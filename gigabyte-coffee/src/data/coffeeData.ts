import { MenuItem } from '../utils/coffeeUtils.ts';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'menu-1',
    name: 'Brown Sugar Latte',
    category: 'Coffee',
    price: 4.85,
    description: 'Double ristretto espresso, velvety steamed oat milk, and organic Taiwanese dark brown sugar reduction.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    calories: 195,
    tags: ['Bestseller', 'Sweet & Smooth'],
  },
  {
    id: 'menu-2',
    name: 'Caramel Macchiato',
    category: 'Coffee',
    price: 5.25,
    description: 'Freshly steamed whole milk with vanilla-infused syrup, marked with espresso and artisanal caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    calories: 220,
    tags: ['Customer Favorite', 'Rich Caramel'],
  },
  {
    id: 'menu-3',
    name: 'Mocha Espresso Supreme',
    category: 'Coffee',
    price: 5.50,
    description: 'Dark Belgian chocolate ganache melted into espresso shots, topped with silky microfoam and cocoa dust.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    calories: 260,
    tags: ['Chocolatey', 'Decadent'],
  },
  {
    id: 'menu-3b',
    name: 'Vanilla Bean Cortado',
    category: 'Coffee',
    price: 4.60,
    description: 'Equal parts robust espresso and warm textured milk, infused with raw Tahitian vanilla pod essence.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    calories: 110,
    tags: ['Silky', 'Balanced'],
  },
  {
    id: 'menu-4',
    name: 'Vanilla Cold Cloud',
    category: 'Iced Coffee',
    price: 5.40,
    description: '18-hour slow steeped cold brew poured over clear ice, finished with Madagascar vanilla sweet cream foam.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
    rating: 5.0,
    calories: 140,
    tags: ['Cold Brew', 'Refreshing'],
  },
  {
    id: 'menu-5',
    name: 'Ceremonial Uji Matcha',
    category: 'NonCoffee',
    price: 5.75,
    description: 'Direct-trade Japanese Uji ceremonial green tea whisked with silky milk and natural wildflower honey.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    calories: 165,
    tags: ['Antioxidant', 'Calming'],
  },
  {
    id: 'menu-6',
    name: 'Gigabyte Reserve Geisha',
    category: 'Signature',
    price: 7.50,
    description: 'Ultra-rare Panama Boquete Geisha with notes of jasmine blossom, bergamot, and golden peach.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    rating: 5.0,
    calories: 10,
    tags: ['Specialty Lot', 'Floral & Citrus'],
  },
  {
    id: 'menu-7',
    name: 'Golden Turmeric Chai',
    category: 'NonCoffee',
    price: 5.10,
    description: 'Slow-simmered Assam black tea, organic turmeric root, cardamom, ginger, cinnamon, and coconut cream.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    calories: 180,
    tags: ['Wellness', 'Spiced'],
  },
  {
    id: 'menu-8',
    name: 'Iced Nitro Hazelnut',
    category: 'Iced Coffee',
    price: 5.80,
    description: 'Nitrogen-infused cold brew with micro-bubbles, hazelnut syrup, and a silky cascade mouthfeel.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    calories: 125,
    tags: ['Nitro Tap', 'Creamy Head'],
  },
];

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  aspect?: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    title: 'Artisanal Latte Rosette',
    subtitle: 'Freehand pour on Colombian single-origin',
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    title: 'Single Ceramic Cup',
    subtitle: 'Pure roasted aroma in the morning light',
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    title: 'Espresso Bar Craft',
    subtitle: 'High precision 9-bar extraction',
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
    title: 'Freshly Roasted Beans',
    subtitle: 'Medium-dark roast with caramelized sugars',
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    title: 'V60 Drip Manual Pour',
    subtitle: 'Highlighting subtle terroir & floral notes',
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=800&q=80',
    title: 'Symmetrical Heart Pour',
    subtitle: 'Microfoam perfection by our head barista',
  },
  {
    id: 'gal-7',
    url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    title: 'Blue Ceramic Signature',
    subtitle: 'House blend served with homemade biscotti',
  },
  {
    id: 'gal-8',
    url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    title: 'The Coffee Lounge',
    subtitle: 'Sunlit tables with aroma in the air',
  },
  {
    id: 'gal-9',
    url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80',
    title: 'Chemex Batch Pouring',
    subtitle: 'Clean, tea-like body with bright clarity',
  },
];

export interface CustomerReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Jane Doe',
    role: 'Coffee Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Gigabyte Coffee is easily the best cafe experience in town. The Brown Sugar Latte is balanced to perfection, never overly sweet!',
    date: '3 days ago',
  },
  {
    id: 'rev-2',
    name: 'Marcus Vance',
    role: 'Tech Lead & Remote Worker',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Unbelievable consistency. Whether you drop by at 8am or 4pm, the espresso notes are always nuanced and clean. Fast Wi-Fi too!',
    date: '1 week ago',
  },
  {
    id: 'rev-3',
    name: 'Elena Rostova',
    role: 'Pastry Chef & Foodie',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Their Geisha reserve pour-over is transcendent. You can taste the jasmine and honey. Also pair it with their fresh baked almond cookies!',
    date: '2 weeks ago',
  },
  {
    id: 'rev-4',
    name: 'David Chen',
    role: 'Architect & Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Atmosphere is stunning, warm lighting, deep espresso hues, and hospitable baristas who genuinely care about bean craftsmanship.',
    date: '3 weeks ago',
  },
];

export const SKILL_STATS = [
  {
    id: 'stat-1',
    number: '200+',
    label: 'Online Stores',
    description: 'Partner branches and roastery distributors across 12 countries.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'stat-2',
    number: '40+',
    label: 'Product Types',
    description: 'Single origins, signature blends, cold brews, and seasonal artisanal syrups.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'stat-3',
    number: '10+',
    label: 'Years Experience',
    description: 'A decade of precision roasting, barista education, and specialty sourcing.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'stat-4',
    number: '500k',
    label: 'Happy Buyers',
    description: 'Satisfied coffee lovers starting their mornings with our handcrafted cups.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=300&q=80',
  },
];
