import { Router } from "express";

import { lifeRoutes } from "./life";
import { userRoutes } from "./user/user.routes";
import { randomRoutes } from "./random/random.routes";

const routes = Router();

routes.use(lifeRoutes, userRoutes, randomRoutes);

export const allRoutes = routes;
