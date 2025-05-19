import { z } from "zod";
import { publicProcedure, router } from "./router";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const productRouter = router({
  list: publicProcedure
    .input(
      z
        .object({
          q: z.string().optional(),
          page: z.number().min(1).default(1),
          limit: z.number().min(1).max(100).default(10),
          minPrice: z.number().optional(),
          maxPrice: z.number().optional(),
        })
        .optional(),
    )
    .query(async ({ input }) => {
      const where: Prisma.ProductWhereInput = {};

      if (input?.q) {
        where.name = {
          contains: input?.q,
          mode: "insensitive",
        };
      }

      if (input?.minPrice !== undefined || input?.maxPrice !== undefined) {
        where.price = {};
        if (input?.minPrice !== undefined) where.price.gte = input?.minPrice;
        if (input?.maxPrice !== undefined) where.price.lte = input?.maxPrice;
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

  get: publicProcedure.input(z.string()).query(({ input }) => {
    return prisma.product.findUnique({ where: { slug: input } });
  }),

  create: publicProcedure
    .input(
      z.object({
        sku: z.string(),
        slug: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        imageUrl: z.string().optional(),
        stockQuantity: z.number(),
        minimumOrderQuantity: z.number(),
      }),
    )
    .mutation(({ input }) => {
      return prisma.product.create({ data: input });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        data: z.object({
          name: z.string().optional(),
          description: z.string().optional(),
          price: z.number().optional(),
          imageUrl: z.string().optional(),
          stockQuantity: z.number().optional(),
          minimumOrderQuantity: z.number().optional(),
        }),
      }),
    )
    .mutation(({ input }) => {
      return prisma.product.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: publicProcedure.input(z.string()).mutation(({ input }) => {
    return prisma.product.delete({ where: { id: input } });
  }),
});
