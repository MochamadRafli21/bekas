import { router } from "./router.js";
import { productRouter } from "./product.js";

export const appRouter = router({
  product: productRouter,
});

export type AppRouter = typeof appRouter;
