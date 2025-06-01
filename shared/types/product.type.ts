import { z } from "zod";

export const productListInputSchema = z.object({
  q: z.string().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
});

export const productGetInputSchema = z.string();

export type ProductListInput = z.infer<typeof productListInputSchema>;
export type ProductGetInput = z.infer<typeof productGetInputSchema>;
