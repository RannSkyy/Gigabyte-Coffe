import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterMenuItems,
  calculateCartTotals,
  isValidEmail,
  validateContactForm,
  formatCurrency,
  MenuItem,
  CartItem,
} from './coffeeUtils.ts';

const mockMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Brown Sugar Latte',
    category: 'Coffee',
    price: 4.5,
    description: 'Espresso with steamed milk and roasted brown sugar syrup',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Matcha Blossom',
    category: 'NonCoffee',
    price: 5.0,
    description: 'Ceremonial grade Uji matcha with light vanilla foam',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Gigabyte Reserve Blend',
    category: 'Signature',
    price: 6.2,
    description: 'Rare Ethiopian Guji washed bean cold extraction',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    rating: 5.0,
  },
  {
    id: '4',
    name: 'Iced Caramel Cloud',
    category: 'Iced Coffee',
    price: 5.5,
    description: 'Chilled espresso topped with whipped caramel cloud cold foam',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
  },
];

test('filterMenuItems filters by category correctly', () => {
  const coffeeOnly = filterMenuItems(mockMenuItems, 'Coffee');
  assert.equal(coffeeOnly.length, 1);
  assert.equal(coffeeOnly[0].name, 'Brown Sugar Latte');

  const allItems = filterMenuItems(mockMenuItems, 'All');
  assert.equal(allItems.length, 4);
});

test('filterMenuItems filters by search query', () => {
  const result = filterMenuItems(mockMenuItems, 'All', 'matcha');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, '2');

  const descResult = filterMenuItems(mockMenuItems, 'All', 'ethiopian');
  assert.equal(descResult.length, 1);
  assert.equal(descResult[0].id, '3');
});

test('calculateCartTotals computes subtotal, discounts, and taxes accurately', () => {
  const cart: CartItem[] = [
    { item: mockMenuItems[0], quantity: 2, size: 'Regular' }, // 4.5 * 2 = 9.0
    { item: mockMenuItems[2], quantity: 1, size: 'Large' },   // 6.2 * 1.25 = 7.75
  ];
  // Subtotal = 9.0 + 7.75 = 16.75

  const totals = calculateCartTotals(cart, 'GIGA10', 0.1);
  assert.equal(totals.itemCount, 3);
  assert.equal(totals.subtotal, 16.75);
  // discount 10% = 1.675 -> rounded 1.68
  assert.equal(totals.discount, 1.68);
  // taxable = 16.75 - 1.68 = 15.07, tax 10% = 1.507 -> 1.51
  assert.equal(totals.tax, 1.51);
  assert.equal(totals.total, 16.58);
});

test('isValidEmail properly detects valid and invalid emails', () => {
  assert.equal(isValidEmail('barista@gigabytecoffee.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail('coffee@domain'), false);
});

test('validateContactForm checks required fields', () => {
  const invalid = validateContactForm({
    name: 'J',
    email: 'bad',
    subject: '',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Sarah Connor',
    email: 'sarah@example.com',
    subject: 'Order inquiry',
    message: 'I would like to order whole bean bags for our office catering.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('formatCurrency outputs expected USD formatted string', () => {
  assert.equal(formatCurrency(4.5), '$4.50');
  assert.equal(formatCurrency(1200), '$1,200.00');
});
