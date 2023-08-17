import { Prisma } from '@prisma/client';

export const menuSelect = Prisma.validator<Prisma.MenuSelect>()({
  mainDishes: true,
  desserts: true,
  drinks: true,
});

const menuData = Prisma.validator<Prisma.MenuArgs>()({
  select: menuSelect,
});

export type Menu = Prisma.MenuGetPayload<typeof menuData>;
