import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./app-router";

const app = express();
const port = 3000;

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
