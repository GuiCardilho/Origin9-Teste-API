import { Router } from "express";
import { UserController } from "../../controller/user/user.controller";

const routes = Router();

routes.delete("/users/:id", UserController.deleteUser);

routes.put("/users/:id", UserController.putUser);

routes.get("/users/random", UserController.getRandomUsers);
routes.get("/users/:id", UserController.getByIdUser);
routes.get("/users", UserController.getAllUser);

routes.post("/users", UserController.postUser);

export const userRoutes = routes;
