import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
import { customAlphabet } from "nanoid";

config();

const prisma = new PrismaClient();
const nanoid = customAlphabet("1234567890abcdef", 6);

async function main() {
  await prisma.product.deleteMany();

  const products = Array.from({ length: 10 }).map((_, i) => {
    const name = `Used iPhone ${7 + i}`;
    return {
      sku: `SKU-${1000 + i}`,
      slug: `${name.toLowerCase().replace(/ /g, "-")}-${nanoid()}`,
      name,
      description: `This is a used iPhone ${7 + i} in good condition.`,
      price: (200 + i * 20).toFixed(2),
      imageUrl: `https://via.placeholder.com/300x200?text=iPhone+${7 + i}`,
      stockQuantity: 10 + i,
      minimumOrderQuantity: 1,
    };
  });

  await prisma.product.createMany({ data: products });
  console.log("✅ Seeded products");
}

main().finally(() => prisma.$disconnect());
