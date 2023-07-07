import { Response, Request } from "express";
import * as gen from "../../util/faker";

class RandomControllerClass {
    async getRandomUsers(req: Request, res: Response) {
        try {
            const amount = parseInt(req.query.amount as string, 10) || 0;

            let arrayUser = [];
            if (!isNaN(amount)) {
                for (let index = 0; index < amount; index++) {
                    const user = gen.generateUsers();
                    arrayUser.push(user);
                }
            }

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
            });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }

    async getRandomAdm(req: Request, res: Response) {
        try {
            const amount = parseInt(req.query.amount as string, 10) || 0;

            let arrayUser = [];
            if (!isNaN(amount)) {
                for (let index = 0; index < amount; index++) {
                    const user = gen.generateAdm();
                    arrayUser.push(user);
                }
            }

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
            });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }

    async getRandomCompany(req: Request, res: Response) {
        try {
            const amount = parseInt(req.query.amount as string, 10) || 0;

            let arrayUser = [];
            if (!isNaN(amount)) {
                for (let index = 0; index < amount; index++) {
                    const user = gen.generateCompany();
                    arrayUser.push(user);
                }
            }

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
            });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }

    async getRandomProduct(req: Request, res: Response) {
        try {
            const amount = parseInt(req.query.amount as string, 10) || 0;

            let arrayUser = [];
            if (!isNaN(amount)) {
                for (let index = 0; index < amount; index++) {
                    const user = gen.generateProducts();
                    arrayUser.push(user);
                }
            }

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
            });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }

    async getRandomCategory(req: Request, res: Response) {
        try {
            const amount = parseInt(req.query.amount as string, 10) || 0;

            let arrayUser = [];
            if (!isNaN(amount)) {
                for (let index = 0; index < amount; index++) {
                    const user = gen.generateCategory();
                    arrayUser.push(user);
                }
            }

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
            });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }

    async getRandomCoupon(req: Request, res: Response) {
        try {
            const amount = parseInt(req.query.amount as string, 10) || 0;

            let arrayUser = [];
            if (!isNaN(amount)) {
                for (let index = 0; index < amount; index++) {
                    const user = gen.generateCoupon();
                    arrayUser.push(user);
                }
            }

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
            });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }
}

export const RandomController = new RandomControllerClass();
