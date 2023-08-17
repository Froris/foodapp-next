import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/PrismaClientSetup';

export async function POST(req: NextRequest) {
  const request = await req.json();

  const userHistoryId = await db.ordersHistory.findUnique({
    where: {
      name: request.name,
    },
    select: {
      id: true,
    },
  });

  if (!userHistoryId) {
    const result = await db.ordersHistory.create({
      data: {
        name: request.name,
        email: request.email,
        phone: request.phone,
        address: request.address,
        OrdersList: {
          create: {
            dishesList: {
              create: request.userOrders.ordersList,
            },
            totalOrderPrice: request.userOrders.totalPrice,
          },
        },
      },
    });
    return NextResponse.json({ message: 'Order created!' }, { status: 200 });
  }

  const result = await db.ordersByUser.create({
    data: {
      ordersHistoryId: userHistoryId.id,
      dishesList: {
        create: request.userOrders.ordersList,
      },
      totalOrderPrice: request.userOrders.totalPrice,
    },
  });

  return NextResponse.json({ message: 'Order created!' }, { status: 200 });
}

export async function GET(req: NextRequest) {
  const queryKeyParam = req.nextUrl.searchParams.get('key');
  const queryKey: QueryKeys | null = queryKeyParam as QueryKeys;
  const value = req.nextUrl.searchParams.get('value') as string;

  type QueryKeys = 'name' | 'phone' | 'email';
  const queryObj: { [key in QueryKeys]: string } = Object.create({});
  queryObj[queryKey] = value;

  const response = await db.ordersHistory.findUnique({
    where: queryObj,
    select: {
      OrdersList: {
        select: {
          dishesList: true,
          totalOrderPrice: true,
        },
      },
    },
  });

  if (response !== null) {
    return NextResponse.json({ data: response.OrdersList }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: 'The user not found' },
      { status: 400 }
    );
  }
}
