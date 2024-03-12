"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsRouter = void 0;
const express_1 = __importDefault(require("express"));
const dataIsValid_middleware_1 = require("../middlewares/dataIsValid.middleware");
const client_schema_1 = require("../schemas/client.schema");
const controllers_1 = require("../controllers");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.clientsRouter = express_1.default.Router();
/**
   * @openapi
   * '/client':
   *  post:
   *     tags:
   *     - Client
   *     summary: Register a client
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateClientInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateClientResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
  */
exports.clientsRouter.post("", (0, dataIsValid_middleware_1.dataIsValidMiddleware)(client_schema_1.clientCreateSchema), (req, res) => controllers_1.clientController.create(req, res));
exports.clientsRouter.use(auth_middleware_1.authMiddleware);
/**
 * @openapi
 * '/client':
 *   get:
 *     tags:
 *       - Client
 *     summary: Get a client with TOKEN
 *     components:
 *      securitySchemes:
 *        bearerAuth:            # arbitrary name for the security scheme
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 *     security:
 *       - bearerAuth: []  # Adiciona a segurança aqui
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateClientResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
exports.clientsRouter.get("", (req, res) => controllers_1.clientController.list(req, res));
exports.clientsRouter.patch("", (req, res) => controllers_1.clientController.update(req, res));
exports.clientsRouter.delete("", (req, res) => controllers_1.clientController.delete(req, res));
