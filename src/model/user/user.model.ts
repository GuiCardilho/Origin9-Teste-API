import moment from "moment";
import { Schema, model, Document, Model } from "mongoose";
import { regexDataBanco } from "../../util/regex";

interface User extends Document {
    nome: string;
    data_nascimento: string;
    cpf: string;
    endereco: string;
    status: "Ativo" | "Inativo";
    createdAt: Date;
}

interface UserModel extends Model<User> {
    criarComDataPtBR(user: Omit<User, "createdAt">): Promise<User>;
}

const userSchema = new Schema<User>({
    nome: { type: String, required: true },
    data_nascimento: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    endereco: { type: String, required: true },
    status: { type: String, required: true, enum: ["Ativo", "Inativo"] },
    createdAt: { type: Date, require: true, default: Date.now },
});

userSchema.pre<User>("save", function (next) {
    if (
        this.isModified("data_nascimento") &&
        !regexDataBanco.test(this.data_nascimento)
    ) {
        this.data_nascimento = moment(
            this.data_nascimento,
            "DD/MM/YYYY"
        ).format("YYYY-MM-DD");
    }
    next();
});

export const User: UserModel = model<User, UserModel>("Users", userSchema);
