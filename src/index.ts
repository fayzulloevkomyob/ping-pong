import { Elysia } from "elysia";

const app = new Elysia()
  .get("/ping", () => "pong")
  .listen(Bun.env.PORT ?? 3000);

console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`);
