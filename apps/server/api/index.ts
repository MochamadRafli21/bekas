import { handle } from "@hono/node-server/vercel";
// eslint-disable-next-line ts/ban-tscomment
import app from "../dist/index.js";

export default handle(app);
