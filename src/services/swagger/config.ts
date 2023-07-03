import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        expanded: false,
        info: {
            title: "Teste Origin9",
            description: "Swagger da API do Teste Origin9",
            version: "1.0.0",
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 9000}`,
                description: "Servidor local",
            },
        ],
    },
    apis: ["./src/routes/**/*.swagger.ts"],
    swaggerUI: {
        docExpansion: "none",
    },
};


if (process.env.URL_API_ONLINE_SWAGGER) {
    options.definition.servers.unshift({
        url: `${process.env.URL_API_ONLINE_SWAGGER}`,
        description: "Servidor online",
    });
}

export const swaggerSpec = swaggerJSDoc(options);
