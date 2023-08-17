import { restaurantsData } from '../lib/seedData';
import { db } from '../lib/PrismaClientSetup';

async function main() {
  // ... write Prisma Client queries/seed here

  const restaurants = await Promise.all(
    restaurantsData.map((restaurant) => {
      return db.restaurant.create({
        data: {
          name: restaurant.name,
          brandColor: restaurant.brandColor,
          image: restaurant.image,
          Menu: {
            create: {
              mainDishes: { createMany: { data: restaurant.mainDishes } },
              desserts: { createMany: { data: restaurant.desserts } },
              drinks: { createMany: { data: restaurant.drinks } },
            },
          },
        },
        include: {
          Menu: {
            include: {
              mainDishes: true,
              drinks: true,
              desserts: true,
            },
          },
        },
      });
    })
  );
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
