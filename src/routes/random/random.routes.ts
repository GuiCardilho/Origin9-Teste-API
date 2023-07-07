import { Router } from "express";
import { RandomController } from "../../controller/random/random.controller";

const routes = Router();

routes.get("/random/users", RandomController.getRandomUsers);
routes.get("/random/admin", RandomController.getRandomAdm);
routes.get("/random/company", RandomController.getRandomCompany);
routes.get("/random/product", RandomController.getRandomProduct);
routes.get("/random/category", RandomController.getRandomCategory);
routes.get("/random/coupon", RandomController.getRandomCoupon);

export const randomRoutes = routes;
