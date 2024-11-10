import express from "express";
import cors from "cors";
import { setupRoutes } from "./routes/index.ts";
import { initializeClient } from "./gateway/db.ts";

const HOSTNAME = "127.0.0.1";
const PORT = process.env.PORT ?? 8080;

const server = express();
server.use(express.json());
server.use(
  cors({ origin: ["http://localhost:5173", "https://pjamarante24.github.io"] })
);

initializeClient();
setupRoutes(server);

server.listen(+PORT as number, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
