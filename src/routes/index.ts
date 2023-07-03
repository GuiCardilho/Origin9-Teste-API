import { Router } from "express";

import { lifeRoutes } from "./life";
import { userRoutes } from "./user/user.routes";

const routes = Router();

routes.use(lifeRoutes, userRoutes);

export const allRoutes = routes;
