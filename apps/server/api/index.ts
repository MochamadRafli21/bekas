import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./trpc";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (c) => {
  return c.json({ message: "hello" });
});
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  }),
);

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
