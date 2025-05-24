import { handle } from "@hono/node-server/vercel";
// eslint-disable-next-line ts/ban-tscomment
// @ts-expect-error
import app from "../dist/index.js";

export default handle(app);
