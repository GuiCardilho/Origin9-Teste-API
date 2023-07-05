import { Router } from "express";
import { RandomController } from "../../controller/random/random.controller";

const routes = Router();

routes.get("/admin/random", RandomController.getRandomAdm);
routes.get("/company/random", RandomController.getRandomCompany);
routes.get("/product/random", RandomController.getRandomProduct);
routes.get("/category/random", RandomController.getRandomCategory);
routes.get("/coupon/random", RandomController.getRandomCoupon);

export const randomRoutes = routes;
