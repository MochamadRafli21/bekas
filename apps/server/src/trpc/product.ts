import { z } from "zod";
import { publicProcedure, router } from "./router";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const productRouter = router({
  list: publicProcedure
    .input(
      z
        .object({
          q: z.string().optional(),
        })
        .optional(),
    )
    .query(({ input }) => {
      return prisma.product.findMany({
        where: input?.q
          ? {
              name: {
                contains: input.q,
                mode: "insensitive", // Case-insensitive search
              },
            }
          : undefined,
        orderBy: {
          createdAt: "desc",
        },
      });
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
