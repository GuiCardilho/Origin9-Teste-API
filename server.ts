import dotenv from "dotenv";
dotenv.config();

import app from "./src/app";
import { connection } from "./src/database/connection";

const PORT = process.env.PORT || 9000;

app.listen(PORT, async () => {
    await connection();
    console.log(`🚀 - Servidor iniciado na porta: ${PORT}`);
    console.log(`🚀 - Localhost: http://localhost:${PORT}`);
});
