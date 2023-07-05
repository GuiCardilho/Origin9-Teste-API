import { Router } from "express";
import { UserAdmController } from "../../controller/user/user.adm.controller";

const routes = Router();

routes.delete("/admins/:id", UserAdmController.deleteUser);

routes.put("/admins/:id", UserAdmController.putUser);

routes.get("/admins/:id", UserAdmController.getByIdUser);
routes.get("/admins", UserAdmController.getAllUser);

routes.post("/admins", UserAdmController.postUser);

export const userAdmRoutes = routes;
