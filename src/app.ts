import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { allRoutes } from "./routes";
import { consoleMiddleware } from "./middleware/console";
import { swaggerSpec } from "./services/swagger/config";

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());
app.use(consoleMiddleware);
app.use(allRoutes);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, undefined, { docExpansion: "none" })
);

export default app;
