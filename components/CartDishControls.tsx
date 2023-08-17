'use client';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CartContext } from '../context/CartContext';

type Props = {
  id: string;
  amount: number;
  totalOrderPrice: string;
};
export const CartDishControls = ({ id, amount, totalOrderPrice }: Props) => {
  const [selectedAmount, setSelectedAmount] = useState<string>(
    amount.toString()
  );
  const { ordersList, addOrder, removeOrder, changeAmount } =
    useContext(CartContext);

  function handleRemoveItem() {
    removeOrder(id);
  }

  function handleAmountChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedAmount(e.target.value);
  }

  useEffect(() => {
    changeAmount(id, selectedAmount);
  }, [selectedAmount]);

  return (
    <section className='w-full px-5 flex flex-col justify-center items-start gap-y-3'>
      <Label htmlFor='amount'>Amount</Label>
      <Input
        id='amount'
        type='number'
        className='w-1/2'
        onChange={handleAmountChange}
        value={selectedAmount}
      />
      <p className='text-xl'>
        Order price:{' '}
        <span className='text-white bg-green-500 px-1 rounded-md'>
          {totalOrderPrice}$
        </span>
      </p>
      <Button variant='destructive' onClick={handleRemoveItem}>
        REMOVE
      </Button>
    </section>
  );
};
