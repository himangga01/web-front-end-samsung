import { useContext } from 'react';
import { CartContext } from 'contents/cartProvider';

// 커스텀 훅
export function useCart() {
    const value = useContext(CartContext);
    if (!value) {
      throw new Error(
        'useCart 훅은 CartProvider 컴포넌트 내부에서만 사용 가능합니다.'
      );
    }

    return value;
  }