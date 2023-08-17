'use client';
import React from 'react';
import AuthProvider from '../context/AuthProvider';
import { CartContextProvider } from '../context/CartContext';

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </AuthProvider>
  );
};

export default RootProviders;
