import { router } from "./router";
import { productRouter } from "./product";

export const appRouter = router({
  product: productRouter,
});

export type AppRouter = typeof appRouter;
