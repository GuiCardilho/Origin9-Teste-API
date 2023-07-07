import { Response, Request } from "express";
import { User } from "../../model/user/user.model";
import { regexCPF, regexData, regexDataBanco } from "../../util/regex";
import moment from "moment";

class UserControllerClass {
    async getAllUser(req: Request, res: Response) {
        try {
            const { search } = req.query || "";

            const regex = new RegExp(search as string, "i");

            const result = await User.find({
                $or: [
                    { nome: regex },
                    { data_nascimento: regex },
                    { cpf: regex },
                    { endereco: regex },
                    { status: regex },
                ],
            }).sort({ createdAt: "desc" });

            const resultptBR = result.map((user) => {
                return {
                    ...user.toObject(),
                    data_nascimento: moment(
                        user.data_nascimento,
                        "YYYY-MM-DD"
                    ).format("DD/MM/YYYY"),
                };
            });

            const FormModalUser = [
                {
                    title: "Nome",
                    name: "nome",
                    placeholder: "Insira o nome",
                },
                {
                    title: "CPF",
                    name: "cpf",
                    placeholder: "Insira o CPF",
                    mask: "999.999.999-99",
                },
                {
                    title: "Data de Nascimento",
                    name: "data_nascimento",
                    placeholder: "Insira a data de nascimento",
                    type: "date",
                },
                {
                    title: "Endereço",
                    name: "endereco",
                    placeholder: "Insira o endereço",
                },
                {
                    title: "Status",
                    name: "status",
                    select: {
                        options: [
                            { value: "", text: "Selecione uma opção" },
                            { value: "Ativo", text: "Ativo" },
                            { value: "Inativo", text: "Inativo" },
                        ],
                    },
                },
            ];

            return res.status(200).json({
                rows: resultptBR,
                status: "Sucesso",
                modal: FormModalUser,
                title: "Usuario",
            });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }

    async getByIdUser(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    status: "Falha",
                    message: "Ausência  de ID",
                });
            }

            const result = await User.findById(id);

            return res.status(200).json({
                rows: result,
                status: "Sucesso",
            });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }

    async postUser(req: Request, res: Response) {
        try {
            const { nome, data_nascimento, cpf, endereco, status } = req.body;

            if (!nome || !data_nascimento || !cpf || !endereco || !status) {
                return res.status(400).json({
                    status: "Falha",
                    message: "Ausência  de dado(s) requirido",
                });
            }

            if (
                !regexData.test(data_nascimento) &&
                !regexDataBanco.test(data_nascimento)
            ) {
                return res.status(400).json({
                    status: "Falha",
                    message: "Data invalido",
                });
            }
            if (!regexCPF.test(cpf) || cpf.length !== 14) {
                return res.status(400).json({
                    status: "Falha",
                    message: "CPF Invalida",
                });
            }

            const verifyCPF = await User.countDocuments({ cpf: cpf });
            if (verifyCPF) {
                return res.status(400).json({
                    status: "Falha",
                    message: "CPF já cadastrado",
                });
            }

            const payload = {
                nome,
                data_nascimento,
                cpf,
                endereco,
                status,
            };

            const result = await User.create(payload);

            return res.status(200).json({ user: result, status: "Sucesso" });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }

    async putUser(req: Request, res: Response) {
        try {
            const { nome, data_nascimento, cpf, endereco, status } = req.body;
            const { id } = req.params;

            const verify = User.countDocuments({ _id: id });
            if (!verify) {
                return res.status(400).json({
                    status: "Falha",
                    message: "Usuario não encontrado",
                });
            }

            if (!nome || !data_nascimento || !cpf || !endereco || !status) {
                return res.status(400).json({
                    status: "Falha",
                    message: "Ausência  de dado(s) requirido",
                });
            }

            if (
                !regexData.test(data_nascimento) &&
                !regexDataBanco.test(data_nascimento)
            ) {
                return res.status(400).json({
                    status: "Falha",
                    message: "Data invalido",
                });
            }

            if (!regexCPF.test(cpf)) {
                return res.status(400).json({
                    status: "Falha",
                    message: "CPF Invalida",
                });
            }

            const verifyCPF = await User.countDocuments({
                cpf: cpf,
                _id: { $ne: id },
            });

            if (verifyCPF) {
                return res.status(400).json({
                    status: "Falha",
                    message: "CPF já cadastrado",
                });
            }

            const payload = {
                nome,
                data_nascimento,
                cpf,
                endereco,
                status,
            };

            await User.findOneAndUpdate({ _id: id }, payload);
            const result = await User.findById(id);

            return res.status(200).json({ user: result, status: "Sucesso" });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const verify = User.countDocuments({ _id: id });
            if (!verify) {
                return res.status(400).json({
                    status: "Falha",
                    message: "Usuario não encontrado",
                });
            }

            await User.deleteOne({ _id: id });

            return res.status(200).json({ status: "Sucesso" });
        } catch (error) {
            return res.status(500).json({
                status: "Falha",
                message: `Erro inesperado: ${error}`,
            });
        }
    }
}

export const UserController = new UserControllerClass();
