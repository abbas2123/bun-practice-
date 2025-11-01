import { Elysia } from "elysia";
import { Home } from "./pages/home.js";
import { About } from "./pages/about.js";

const app = new Elysia()
  .get("/", () => new Response(Home(), { headers: { "Content-Type": "text/html; charset=utf-8" } }))
  .get("/about", () => new Response(About(), { headers: { "Content-Type": "text/html; charset=utf-8" } }))
  .listen(3000);

console.log("✅ Server running at http://localhost:3000");
