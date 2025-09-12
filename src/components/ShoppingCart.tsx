import React, { useState } from 'react';
import { ShoppingCartProps, CartItem } from '../types';
import Button from './Button';
import Card from './Card';
import Modal from './Modal';
import Input from './Input';

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onClearCart,
  className = '',
  showCheckout = true,
  onCheckout,
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<CartItem | null>(null);
  const [newItem, setNewItem] = useState({
    name: '',
    price: 0,
    quantity: 1,
    image: '',
    description: '',
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.price > 0) {
      onAddItem(newItem);
      setNewItem({
        name: '',
        price: 0,
        quantity: 1,
        image: '',
        description: '',
      });
      setIsAddModalOpen(false);
    }
  };

  const handleEditItem = (item: CartItem) => {
    setEditingItem(item);
    setIsEditModalOpen(true);
  };

  const handleUpdateItem = () => {
    if (editingItem) {
      onUpdateItem(editingItem.id, editingItem);
      setIsEditModalOpen(false);
      setEditingItem(null);
    }
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      onRemoveItem(itemId);
    } else {
      onUpdateItem(itemId, { quantity: newQuantity });
    }
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`shopping-cart ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Giỏ hàng ({itemCount} sản phẩm)
        </h2>
        <div className="flex gap-2">
          <Button
            onClick={() => setIsAddModalOpen(true)}
            variant="primary"
            size="medium"
          >
            Thêm sản phẩm
          </Button>
          {items.length > 0 && (
            <Button
              onClick={onClearCart}
              variant="danger"
              size="medium"
            >
              Xóa tất cả
            </Button>
          )}
        </div>
      </div>

      {/* Cart Items */}
      {items.length === 0 ? (
        <Card className="text-center py-12">
          <div className="text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Giỏ hàng trống</h3>
            <p className="mt-1 text-sm text-gray-500">Hãy thêm sản phẩm vào giỏ hàng của bạn.</p>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="flex items-center p-4">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
              )}
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                )}
                <p className="text-lg font-bold text-blue-600 mt-1">
                  {item.price.toLocaleString('vi-VN')} VNĐ
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  variant="secondary"
                  size="small"
                >
                  -
                </Button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <Button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  variant="secondary"
                  size="small"
                >
                  +
                </Button>
              </div>
              
              <div className="ml-4 text-right">
                <p className="text-lg font-bold text-gray-900">
                  {(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ
                </p>
                <div className="flex gap-2 mt-2">
                  <Button
                    onClick={() => handleEditItem(item)}
                    variant="secondary"
                    size="small"
                  >
                    Sửa
                  </Button>
                  <Button
                    onClick={() => onRemoveItem(item.id)}
                    variant="danger"
                    size="small"
                  >
                    Xóa
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Total and Checkout */}
      {items.length > 0 && (
        <div className="mt-6 bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-gray-900">Tổng cộng:</span>
            <span className="text-2xl font-bold text-blue-600">
              {total.toLocaleString('vi-VN')} VNĐ
            </span>
          </div>
          
          {showCheckout && onCheckout && (
            <Button
              onClick={onCheckout}
              variant="success"
              size="large"
              className="w-full"
            >
              Thanh toán
            </Button>
          )}
        </div>
      )}

      {/* Add Item Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Thêm sản phẩm mới"
        size="medium"
      >
        <div className="space-y-4">
          <Input
            label="Tên sản phẩm"
            placeholder="Nhập tên sản phẩm"
            value={newItem.name}
            onChange={(value) => setNewItem({ ...newItem, name: value })}
            required
          />
          
          <Input
            type="number"
            label="Giá (VNĐ)"
            placeholder="Nhập giá sản phẩm"
            value={newItem.price}
            onChange={(value) => setNewItem({ ...newItem, price: Number(value) })}
            required
          />
          
          <Input
            type="number"
            label="Số lượng"
            placeholder="Nhập số lượng"
            value={newItem.quantity}
            onChange={(value) => setNewItem({ ...newItem, quantity: Number(value) })}
            required
          />
          
          <Input
            label="Hình ảnh (URL)"
            placeholder="Nhập URL hình ảnh"
            value={newItem.image}
            onChange={(value) => setNewItem({ ...newItem, image: value })}
          />
          
          <Input
            label="Mô tả"
            placeholder="Nhập mô tả sản phẩm"
            value={newItem.description}
            onChange={(value) => setNewItem({ ...newItem, description: value })}
          />
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              onClick={() => setIsAddModalOpen(false)}
              variant="secondary"
            >
              Hủy
            </Button>
            <Button
              onClick={handleAddItem}
              variant="primary"
            >
              Thêm sản phẩm
            </Button>
          </div>
        </div>
      </Modal>

      {/* Edit Item Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Sửa sản phẩm"
        size="medium"
      >
        {editingItem && (
          <div className="space-y-4">
            <Input
              label="Tên sản phẩm"
              placeholder="Nhập tên sản phẩm"
              value={editingItem.name}
              onChange={(value) => setEditingItem({ ...editingItem, name: value })}
              required
            />
            
            <Input
              type="number"
              label="Giá (VNĐ)"
              placeholder="Nhập giá sản phẩm"
              value={editingItem.price}
              onChange={(value) => setEditingItem({ ...editingItem, price: Number(value) })}
              required
            />
            
            <Input
              type="number"
              label="Số lượng"
              placeholder="Nhập số lượng"
              value={editingItem.quantity}
              onChange={(value) => setEditingItem({ ...editingItem, quantity: Number(value) })}
              required
            />
            
            <Input
              label="Hình ảnh (URL)"
              placeholder="Nhập URL hình ảnh"
              value={editingItem.image || ''}
              onChange={(value) => setEditingItem({ ...editingItem, image: value })}
            />
            
            <Input
              label="Mô tả"
              placeholder="Nhập mô tả sản phẩm"
              value={editingItem.description || ''}
              onChange={(value) => setEditingItem({ ...editingItem, description: value })}
            />
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button
                onClick={() => setIsEditModalOpen(false)}
                variant="secondary"
              >
                Hủy
              </Button>
              <Button
                onClick={handleUpdateItem}
                variant="primary"
              >
                Cập nhật
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ShoppingCart;
