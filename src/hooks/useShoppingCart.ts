import { useState, useCallback } from 'react';
import { CartItem, Cart } from '../types';

export const useShoppingCart = (initialItems: CartItem[] = []) => {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const addItem = useCallback((newItem: Omit<CartItem, 'id'>) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const item: CartItem = { ...newItem, id };
    
    setItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.name === newItem.name && item.price === newItem.price
      );
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      
      return [...prevItems, item];
    });
  }, []);

  const updateItem = useCallback((id: string, updates: Partial<CartItem>) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getTotal = useCallback(() => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [items]);

  const getItemCount = useCallback(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const cart: Cart = {
    items,
    total: getTotal(),
    itemCount: getItemCount(),
  };

  return {
    cart,
    addItem,
    updateItem,
    removeItem,
    clearCart,
  };
};
