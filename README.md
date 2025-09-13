# React Shopping Cart Library

A comprehensive React library for shopping cart functionality with reusable UI components built with TypeScript and Tailwind CSS.

## 🚀 Features

- **Complete Shopping Cart Management**: Add, edit, remove, and clear cart items
- **Reusable UI Components**: Button, Card, Input, Modal components
- **TypeScript Support**: Full type definitions for all components
- **Custom Hook**: `useShoppingCart` for easy state management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Vietnamese Localization**: Built-in Vietnamese text support
- **Modern UI**: Clean, accessible, and user-friendly interface

## 📦 Installation

```bash
npm install react-shopping-cart-library
```

## 🎯 Quick Start

```tsx
import React from 'react';
import { ShoppingCart, useShoppingCart } from 'react-shopping-cart-library';

function App() {
  const { cart, addItem, updateItem, removeItem, clearCart } = useShoppingCart();

  const handleCheckout = () => {
    console.log('Checkout:', cart);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <ShoppingCart
          items={cart.items}
          onAddItem={addItem}
          onUpdateItem={updateItem}
          onRemoveItem={removeItem}
          onClearCart={clearCart}
          onCheckout={handleCheckout}
          showCheckout={true}
          className="max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
}

export default App;
```

## 🧩 Components

### ShoppingCart

The main shopping cart component with full CRUD functionality.

```tsx
<ShoppingCart
  items={cart.items}
  onAddItem={addItem}
  onUpdateItem={updateItem}
  onRemoveItem={removeItem}
  onClearCart={clearCart}
  onCheckout={handleCheckout}
  showCheckout={true}
  className="custom-class"
/>
```

**Props:**
- `items`: Array of cart items
- `onAddItem`: Function to add new item
- `onUpdateItem`: Function to update existing item
- `onRemoveItem`: Function to remove item
- `onClearCart`: Function to clear all items
- `onCheckout`: Function called on checkout
- `showCheckout`: Boolean to show/hide checkout button
- `className`: Additional CSS classes

### Button

Reusable button component with multiple variants and sizes.

```tsx
<Button
  variant="primary"
  size="medium"
  onClick={handleClick}
  disabled={false}
>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'success'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `onClick`: click handler
- `type`: 'button' | 'submit' | 'reset'

### Card

Flexible card component for displaying content.

```tsx
<Card
  title="Card Title"
  subtitle="Card Subtitle"
  image="image-url"
  onClick={handleClick}
>
  Card content
</Card>
```

### Input

Form input component with validation support.

```tsx
<Input
  type="text"
  label="Name"
  placeholder="Enter your name"
  value={value}
  onChange={setValue}
  required
  error={errorMessage}
/>
```

### Modal

Modal component with backdrop and keyboard support.

```tsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
  size="medium"
>
  Modal content
</Modal>
```

## 🎣 Hooks

### useShoppingCart

Custom hook for managing shopping cart state.

```tsx
const {
  cart,
  addItem,
  updateItem,
  removeItem,
  clearCart
} = useShoppingCart(initialItems);
```

**Returns:**
- `cart`: Cart object with items, total, and itemCount
- `addItem`: Function to add new item
- `updateItem`: Function to update existing item
- `removeItem`: Function to remove item
- `clearCart`: Function to clear all items

## 📝 Types

```tsx
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
}

interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}
```

## 🎨 Styling

This library uses Tailwind CSS for styling. Make sure to include Tailwind CSS in your project:

```bash
npm install tailwindcss
```

Add to your CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:
- Mobile: Optimized for small screens
- Tablet: Enhanced layout for medium screens
- Desktop: Full-featured layout for large screens

## 🌐 Localization

Currently supports Vietnamese language. The library includes:
- Vietnamese text for all UI elements
- Vietnamese number formatting (VNĐ currency)
- Vietnamese date/time formatting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you find any bugs or have feature requests, please open an issue on [GitHub](https://github.com/yourusername/react-shopping-cart-library/issues).

## 📞 Support

For support, email your-email@example.com or create an issue on GitHub.

---

Made with ❤️ by [Your Name](https://github.com/yourusername)