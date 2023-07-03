import { Router } from "express";

const routes = Router();

routes.get("/life", (req, res) => {
    res.status(200).json({ message: "🚀 - Servidor Rodando" });
});

export const lifeRoutes = routes;
