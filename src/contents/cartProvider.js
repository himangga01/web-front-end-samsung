import React from 'react';
import { any, shape, string, number, func, arrayOf, exact } from 'prop-types';

export const CartContext = React.createContext();

export const CartProvider = ({ value, children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  value: shape({
    title: string,
    products: arrayOf(exact({
      id: string,
      photo: string,
      name: string,
      price: number,
      amount: number,
      maxAmount: number,
    }).isRequired),
    totalPrice: number.isRequired,
    onUpdate: func,
  }),
  children: any,
}