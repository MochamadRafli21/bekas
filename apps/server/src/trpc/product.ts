import { publicProcedure, router } from "./router.js";
import { PrismaClient, Prisma } from "@prisma/client";
import {
  productListInputSchema,
  productGetInputSchema,
} from "../../../../shared/types/product.type.js";

const prisma = new PrismaClient();

export const productRouter = router({
  list: publicProcedure
    .input(productListInputSchema.optional())
    .query(async ({ input }) => {
      const where: Prisma.ProductWhereInput = {};

      if (input?.q) {
        where.name = {
          contains: input.q,
          mode: "insensitive",
        };
      }

      if (input?.minPrice !== undefined || input?.maxPrice !== undefined) {
        where.price = {};
        if (input.minPrice !== undefined) where.price.gte = input.minPrice;
        if (input.maxPrice !== undefined) where.price.lte = input.maxPrice;
      }

      const [items, total] = await Promise.all([
        prisma.product.findMany({
          where,
          skip: ((input?.page || 1) - 1) * (input?.limit || 10),
          take: input?.limit,
          orderBy: { createdAt: "desc" },
        }),
        prisma.product.count({ where }),
      ]);

      return {
        items,
        total,
        page: input?.page || 1,
        totalPages: Math.ceil(total / (input?.limit || 10)),
      };
    }),

  get: publicProcedure.input(productGetInputSchema).query(({ input }) => {
    return prisma.product.findUnique({ where: { slug: input } });
  }),
});
