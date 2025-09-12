import React from 'react';
import { ShoppingCart, useShoppingCart } from '../src';

function App() {
  const { cart, addItem, updateItem, removeItem, clearCart } = useShoppingCart();

  const handleCheckout = () => {
    alert(`Thanh toán thành công!\nTổng tiền: ${cart.total.toLocaleString('vi-VN')} VNĐ\nSố sản phẩm: ${cart.itemCount}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Demo React Shopping Cart Library
        </h1>
        
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
