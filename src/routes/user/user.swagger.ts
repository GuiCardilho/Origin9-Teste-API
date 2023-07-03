/**
 * @swagger
 * /users:
 *      get:
 *          summary: Retorna todos os usuarios
 *          tags:
 *              - Users
 *
 *          responses:
 *              200:
 *                  description: Sucesso
 *              500:
 *                  description: Erro não esperado
 */

/**
 * @swagger
 * /users/random:
 *      get:
 *          summary: Retorna usuarios aleatorios
 *          tags:
 *              - Random
 *          parameters:
 *              - name: amount
 *                in: query
 *                example: 10
 *                description: Quantidade de usuarios
 *                required: true
 *                schema:
 *                    type: string
 *
 *          responses:
 *              200:
 *                  description: Sucesso
 *              500:
 *                  description: Erro não esperado
 */

/**
 * @swagger
 * /users:
 *      post:
 *          summary: Cria um usuario
 *          tags:
 *              - Users
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              nome:
 *                                  type: string
 *                                  example: Joao Ferreira
 *                                  required: true
 *                              data_nascimento:
 *                                  type: string
 *                                  example: 00/00/00
 *                                  required: true
 *                              cpf:
 *                                  type: string
 *                                  example: 000.000.000-00
 *                                  required: true
 *                              endereco:
 *                                  type: string
 *                                  example: Rua das flores
 *                                  required: true
 *                              status:
 *                                  type: string
 *                                  enum: [Ativo, Inativo]
 *                                  required: true
 *
 *          responses:
 *              200:
 *                  description: Sucesso
 *              400:
 *                  description: Faltando informação
 *              500:
 *                  description: Erro não esperado
 */

/**
 * @swagger
 * /users/{idUser}:
 *      get:
 *          summary: Retorna todos os usuarios
 *          tags:
 *              - Users
 *          parameters:
 *              - name: idUser
 *                in: path
 *                description: ID do usuario
 *                required: true
 *                schema:
 *                    type: string
 *
 *          responses:
 *              200:
 *                  description: Sucesso
 *              400:
 *                  description: Faltando informação
 *              500:
 *                  description: Erro não esperado
 */

/**
 * @swagger
 * /users/{idUser}:
 *      put:
 *          summary: Cria um usuario
 *          tags:
 *              - Users
 *          parameters:
 *              - name: idUser
 *                in: path
 *                description: ID do usuario
 *                required: true
 *                schema:
 *                    type: string
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              nome:
 *                                  type: string
 *                                  example: Joao Ferreira
 *                                  required: true
 *                              data_nascimento:
 *                                  type: string
 *                                  example: 00/00/00
 *                                  required: true
 *                              cpf:
 *                                  type: string
 *                                  example: 000.000.000-00
 *                                  required: true
 *                              endereco:
 *                                  type: string
 *                                  example: Rua das flores
 *                                  required: true
 *                              status:
 *                                  type: string
 *                                  enum: [Ativo, Inativo]
 *                                  required: true
 *
 *          responses:
 *              200:
 *                  description: Sucesso
 *              400:
 *                  description: Faltando informação
 *              500:
 *                  description: Erro não esperado
 */

/**
 * @swagger
 * /users/{idUser}:
 *      delete:
 *          summary: Cria um usuario
 *          tags:
 *              - Users
 *          parameters:
 *              - name: idUser
 *                in: path
 *                description: ID do usuario
 *                required: true
 *                schema:
 *                    type: string
 *          responses:
 *              200:
 *                  description: Sucesso
 *              400:
 *                  description: Faltando informação
 *              500:
 *                  description: Erro não esperado
 */
