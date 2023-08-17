'use client';
import * as React from 'react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { OrderedDish } from '.prisma/client';
import { HistoryDishesList } from '@/components/HistoryDishesList';
import { PageContainer } from '@/components/PageContainer';

const FormSchema = z.object({
  searchBy: z.string(),
  searchByValue: z.string().min(2).max(20, {
    message: 'Username must be at least 2 characters.',
  }),
});

type OrdersHistory = Array<{
  dishesList: OrderedDish[];
  totalOrderPrice: number;
}>;

export default function Page() {
  const [ordersHistory, setOrdersHistory] = useState<OrdersHistory>([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchByValue: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/api/orders?key=${data.searchBy}&value=${data.searchByValue}`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setOrdersHistory(result.data);
      })
      .catch((err) =>
        alert('Unable to find orders history. Please try again later.')
      );
  }

  return (
    <PageContainer>
      <main className='w-full h-full flex flex-col items-center gap-y-5'>
        <section className='w-1/3 h-[256px] p-5'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='w-2/3 space-y-6'
            >
              <FormField
                control={form.control}
                name='searchBy'
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className='w-full'>
                          <SelectValue placeholder='Search history by...' />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value='name'>Name</SelectItem>
                        <SelectItem value='email'>Email</SelectItem>
                        <SelectItem value='phone number'>
                          Phone number
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {form.formState.isDirty && (
                <>
                  <FormField
                    control={form.control}
                    name='searchByValue'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder='Enter your value here...'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='submit'>Submit</Button>
                </>
              )}
            </form>
          </Form>
        </section>
        <section className='w-full flex-1 flex flex-col overflow-y-auto px-3'>
          <div className='sticky top-0 z-50'>
            <div className='w-full h-5 bg-gradient-to-b from-white' />
          </div>
          {ordersHistory.map(({ dishesList, totalOrderPrice }, index) => (
            <div
              key={index}
              className='py-2 flex flex-raw flex-nowrap border-t border-gray-300 odd:bg-amber-100 odd:bg-opacity-40'
            >
              <HistoryDishesList dishesList={dishesList} />
              <section className='w-1/6 px-2'>
                <p className='text-xl'>
                  Order price:{' '}
                  <span className='text-white bg-green-500 rounded-md'>
                    {totalOrderPrice.toString()}$
                  </span>
                </p>
              </section>
            </div>
          ))}
        </section>
      </main>
    </PageContainer>
  );
}
