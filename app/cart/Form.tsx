'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { DishOrder } from '@/lib/utils';

const formSchema = z.object({
  username: z.string().min(2).max(20, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().includes('@', {
    message: 'Please provide a correct email.',
  }),
  'phone number': z.string(),
});

export function ClientForm() {
  const router = useRouter();
  const { ordersList } = useContext(CartContext);

  // 1. Defining form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      'phone number': '',
    },
  });

  // 2. Defining a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = formSchema.safeParse(values);
    if (result.success) {
      const parsedOrders = ordersList.map((dish) => {
        return new DishOrder(
          dish.name,
          dish.image,
          dish.description,
          dish.price,
          1,
          dish.price
        );
      });

      const totalPrice = parsedOrders.reduce(
        (acc, order) => acc + order.totalOrderPrice,
        0
      );

      const newUserOrder = {
        name: values.username,
        email: values.email,
        phone: values['phone number'],
        address: 'Empty field',
        userOrders: {
          ordersList: parsedOrders,
          totalPrice,
        },
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify(newUserOrder),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      localStorage.removeItem('orders');
    }
  }

  function onCancel() {
    const response = confirm('Do you want to clear the cart before go back?');
    if (response) {
      localStorage.removeItem('orders');
    }

    router.back();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 flex flex-col'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='example@mail.com' {...field} />
              </FormControl>
              <FormDescription>
                Your email will be used for retrieving your orders history
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone number'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder='+380(000)0000000' {...field} />
              </FormControl>
              <FormDescription>
                Your phone number will be used for retrieving your orders
                history
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='ml-auto'>
          <Button variant='secondary' className='ml-auto' onClick={onCancel}>
            CANCEL
          </Button>
          <Button className='ml-5' type='submit'>
            SUBMIT ORDER
          </Button>
        </div>
      </form>
    </Form>
  );
}
