import mongoose from "mongoose";

export const connection = async () => {
    const StringConnection = process.env.DATABASE || "";

    try {
        await mongoose.connect(StringConnection);
        console.log("💫 - Database conectado com sucesso");
    } catch (error) {
        console.log("❌ - Error ao conectar no database");
    }
};
