import { Response, Request } from "express";
import * as gen from "../../util/faker";

class RandomControllerClass {
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

            const columns = {
                nome: "Nome",
                cargo: "Cargo",
                salario: "Salario",
                status: "Status",
            };

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
                columns: columns,
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

            const columns = {
                empresa: "Empresa",
                cnpj: "CNPJ",
                status: "Status",
            };

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
                columns: columns,
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

            const columns = {
                nome: "Nome",
                categoria: "Categoria",
                preco: "Preço",
                validade: "Validade",
            };

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
                columns: columns,
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

            const columns = {
                nome: "Nome",
                quantidade: "Quantidade de Itens",
            };

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
                columns: columns,
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

            const columns = {
                nome: "Nome",
                produto: "Produto",
                categoria: "Categoria",
                vl_total: "Valor Total",
                desconto: "desconto",
                status: "Valor com desconto",
                validade: "Validade",
            };

            return res.status(200).json({
                message: "Sucesso",
                rows: arrayUser,
                columns: columns,
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
