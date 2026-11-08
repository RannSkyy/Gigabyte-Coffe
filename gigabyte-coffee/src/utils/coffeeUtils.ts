/**
 * Pure helper and logic functions for Gigabyte Coffee
 * Decoupled from React for testing and modularity
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'Coffee' | 'NonCoffee' | 'Signature' | 'Iced Coffee';
  price: number;
  description: string;
  image: string;
  rating: number;
  tags?: string[];
  calories?: number;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  temperature?: 'Hot' | 'Iced';
  size?: 'Regular' | 'Large';
}

export interface ContactFormState {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Filter menu items by category and optional search term
 */
export function filterMenuItems(
  items: MenuItem[],
  category: string,
  searchQuery: string = ''
): MenuItem[] {
  const query = searchQuery.trim().toLowerCase();
  
  return items.filter((item) => {
    const matchesCategory =
      category === 'All' || item.category.toLowerCase() === category.toLowerCase();
    
    const matchesSearch =
      query === '' ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
}

/**
 * Calculate cart order totals
 */
export function calculateCartTotals(
  cart: CartItem[],
  discountCode?: string,
  taxRate: number = 0.1
): {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  itemCount: number;
} {
  const subtotal = cart.reduce((acc, curr) => {
    const sizeMultiplier = curr.size === 'Large' ? 1.25 : 1.0;
    return acc + curr.item.price * sizeMultiplier * curr.quantity;
  }, 0);

  let discount = 0;
  if (discountCode && discountCode.trim().toUpperCase() === 'GIGA10') {
    discount = subtotal * 0.1; // 10% off
  } else if (discountCode && discountCode.trim().toUpperCase() === 'FIRSTCUP') {
    discount = Math.min(subtotal, 5.0); // $5 off
  }

  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = taxableAmount * taxRate;
  const total = taxableAmount + tax;
  const itemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    discount: Math.round(discount * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    total: Math.round(total * 100) / 100,
    itemCount,
  };
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validate contact form inputs
 */
export function validateContactForm(form: ContactFormState): {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormState, string>>;
} {
  const errors: Partial<Record<keyof ContactFormState, string>> = {};

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!form.email || !isValidEmail(form.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!form.message || form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Format currency in USD or IDR style
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}
