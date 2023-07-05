/**
 * @swagger
 * /admins:
 *      get:
 *          summary: Retorna todos os usuarios administrador
 *          tags:
 *              - Admins
 *
 *          responses:
 *              200:
 *                  description: Sucesso
 *              500:
 *                  description: Erro não esperado
 */

/**


/**
 * @swagger
 * /admins:
 *      post:
 *          summary: Cria um usuario administrador
 *          tags:
 *              - Admins
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
 * /admins/{idUser}:
 *      get:
 *          summary: Retorna o usuario administradores
 *          tags:
 *              - Admins
 *          parameters:
 *              - name: idUser
 *                in: path
 *                description: ID do usuario administrador
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
 * /admins/{idUser}:
 *      put:
 *          summary: Edita um usuario administrador
 *          tags:
 *              - Admins
 *          parameters:
 *              - name: idUser
 *                in: path
 *                description: ID do usuario administrador
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
 * /admins/{idUser}:
 *      delete:
 *          summary: Deleta um usuario administrador
 *          tags:
 *              - Admins
 *          parameters:
 *              - name: idUser
 *                in: path
 *                description: ID do usuario administrador
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
