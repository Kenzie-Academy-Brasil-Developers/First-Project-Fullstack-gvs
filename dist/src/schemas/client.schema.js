"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientLoginSchema = exports.clientsReadSchema = exports.clientSchemaReturn = exports.clientUpdateSchema = exports.clientCreateSchema = exports.clientSchema = void 0;
const zod_1 = require("zod");
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateClientInput:
 *      type: object
 *      required:
 *        - completeName
 *        - email
 *        - password
 *        - phone
 *      properties:
 *        completeName:
 *          type: string,
 *          default: Gustavo
 *        email:
 *          type: string
 *          default: gustavo@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *        phone:
 *          type: number
 *          default: 123456
 *    CreateClientResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        completeName:
 *          type: string
 *        email:
 *          type: string
 *        phone:
 *          type: number
 *        registerDate:
 *          type: string
 *
 */
exports.clientSchema = zod_1.z.object({
    id: zod_1.z.string(),
    completeName: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1).max(120),
    phone: zod_1.z.number(),
    registerDate: zod_1.z.string(),
});
exports.clientCreateSchema = exports.clientSchema.omit({
    id: true,
    registerDate: true,
});
exports.clientUpdateSchema = exports.clientSchema.partial();
exports.clientSchemaReturn = exports.clientSchema.omit({
    password: true,
    phone: true,
}).extend({
    phone: zod_1.z.number().or(zod_1.z.string()),
});
exports.clientsReadSchema = zod_1.z.array(exports.clientSchemaReturn);
exports.clientLoginSchema = exports.clientSchema.pick({
    email: true,
    password: true,
});
/**
 * @openapi
 * components:
 *   schemas:
 *     CreateSessionInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: gustavo@example.com
 *         password:
 *           type: string
 *           default: stringPassword123
 *     CreateSessionResponse:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 */
