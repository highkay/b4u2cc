import { handler } from "./deno-proxy/src/main.ts";

// Deno Deploy 识别默认导出的 fetch handler
export default { fetch: handler };
