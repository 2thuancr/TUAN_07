# React Shopping Cart Library

Thư viện React cho chức năng giỏ hàng với các component UI tái sử dụng.

## Tính năng

- 🛒 Quản lý giỏ hàng đầy đủ (thêm, sửa, xóa sản phẩm)
- 🎨 Các component UI chuẩn hóa (Button, Input, Modal, Card)
- 📱 Responsive design
- 🎯 TypeScript support
- 🎨 Tailwind CSS styling
- 🔧 Customizable và dễ sử dụng

## Cài đặt

```bash
npm install react-shopping-cart-library
```

## Sử dụng

### Import các component

```tsx
import { 
  ShoppingCart, 
  useShoppingCart, 
  Button, 
  Input, 
  Modal, 
  Card 
} from 'react-shopping-cart-library';
```

### Sử dụng ShoppingCart

```tsx
import React from 'react';
import { ShoppingCart, useShoppingCart } from 'react-shopping-cart-library';

function App() {
  const { cart, addItem, updateItem, removeItem, clearCart } = useShoppingCart();

  const handleCheckout = () => {
    console.log('Checkout:', cart);
    // Xử lý thanh toán
  };

  return (
    <div className="container mx-auto p-4">
      <ShoppingCart
        items={cart.items}
        onAddItem={addItem}
        onUpdateItem={updateItem}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
        onCheckout={handleCheckout}
        showCheckout={true}
      />
    </div>
  );
}

export default App;
```

### Sử dụng các component riêng lẻ

```tsx
import React, { useState } from 'react';
import { Button, Input, Modal, Card } from 'react-shopping-cart-library';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Card title="Sản phẩm" subtitle="Mô tả sản phẩm">
        <p>Nội dung sản phẩm</p>
      </Card>
      
      <Button 
        variant="primary" 
        size="medium"
        onClick={() => setIsModalOpen(true)}
      >
        Mở Modal
      </Button>
      
      <Input
        label="Tên sản phẩm"
        placeholder="Nhập tên sản phẩm"
        value=""
        onChange={(value) => console.log(value)}
      />
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modal Title"
      >
        <p>Nội dung modal</p>
      </Modal>
    </div>
  );
}
```

## API Reference

### ShoppingCart Props

| Prop | Type | Default | Mô tả |
|------|------|---------|-------|
| items | CartItem[] | - | Danh sách sản phẩm trong giỏ hàng |
| onAddItem | (item: Omit<CartItem, 'id'>) => void | - | Callback khi thêm sản phẩm |
| onUpdateItem | (id: string, updates: Partial<CartItem>) => void | - | Callback khi cập nhật sản phẩm |
| onRemoveItem | (id: string) => void | - | Callback khi xóa sản phẩm |
| onClearCart | () => void | - | Callback khi xóa tất cả |
| className | string | '' | CSS class tùy chỉnh |
| showCheckout | boolean | true | Hiển thị nút thanh toán |
| onCheckout | () => void | - | Callback khi thanh toán |

### CartItem Interface

```tsx
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
}
```

### Button Props

| Prop | Type | Default | Mô tả |
|------|------|---------|-------|
| children | React.ReactNode | - | Nội dung button |
| onClick | () => void | - | Callback khi click |
| variant | 'primary' \| 'secondary' \| 'danger' \| 'success' | 'primary' | Kiểu button |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Kích thước button |
| disabled | boolean | false | Vô hiệu hóa button |
| className | string | '' | CSS class tùy chỉnh |
| type | 'button' \| 'submit' \| 'reset' | 'button' | Loại button |

### Input Props

| Prop | Type | Default | Mô tả |
|------|------|---------|-------|
| type | 'text' \| 'email' \| 'password' \| 'number' | 'text' | Loại input |
| placeholder | string | - | Placeholder text |
| value | string \| number | - | Giá trị input |
| onChange | (value: string) => void | - | Callback khi thay đổi |
| disabled | boolean | false | Vô hiệu hóa input |
| className | string | '' | CSS class tùy chỉnh |
| label | string | - | Label cho input |
| error | string | - | Thông báo lỗi |
| required | boolean | false | Bắt buộc nhập |

## Styling

Thư viện sử dụng Tailwind CSS. Đảm bảo bạn đã cài đặt và cấu hình Tailwind CSS trong project của bạn.

## License

MIT

## Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

## Liên hệ

Nếu có câu hỏi hoặc cần hỗ trợ, hãy tạo issue trên GitHub.
