import { handle } from "hono/vercel";
import app from "../index"; // Your Hono app

export const GET = handle(app);
export const POST = handle(app);
export const ALL = handle(app);
