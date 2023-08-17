'use client';
import { ColorRing } from 'react-loader-spinner';

export const LoaderSpinner = () => {
  return (
    <ColorRing
      height='80'
      width='80'
      ariaLabel='blocks-loading'
      wrapperStyle={{}}
      wrapperClass='blocks-wrapper'
      colors={['#f57c00', '#f50057', '#85F4FF', '#42C2FF', '#1976d2']}
    />
  );
};
