import { Router } from "express";

import { lifeRoutes } from "./life";
import { userRoutes } from "./user/user.routes";
import { randomRoutes } from "./random/random.routes";
import { userAdmRoutes } from "./user/user.adm.routes";

const routes = Router();

routes.use(lifeRoutes, userRoutes, randomRoutes, userAdmRoutes);

export const allRoutes = routes;
