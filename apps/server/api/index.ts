import { handle } from "hono/vercel";
// eslint-disable-next-line ts/ban-tscomment
// @ts-expect-error
import app from "../dist/src/index.js";
export const runtime = "edge";

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
export const DELETE = handler;
export const HEAD = handler;
