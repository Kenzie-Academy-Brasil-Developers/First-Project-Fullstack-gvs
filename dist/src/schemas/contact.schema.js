"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactReadSchema = exports.contactUpdateSchema = exports.contactCreateSchema = exports.contactSchema = void 0;
const zod_1 = require("zod");
/**
 * @openapi
 * components:
 *   schema:
 *     Contact:
 *       type: object
 *       required:
 *        - completeName
 *        - email
 *        - phone
 *       properties:
 *         completeName:
 *           type: string
 *           default: "Gustavo Medeiros"
 *         email:
 *           type: string
 *           default: "gustavo@example.com"
 *         phone:
 *           type: number
 *           default: 123456
 *     contactResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         completeName:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: number
 *         registerDate:
 *           type: string
 *
 */
exports.contactSchema = zod_1.z.object({
    id: zod_1.z.string(),
    completeName: zod_1.z.string().min(1).max(120),
    email: zod_1.z.string().email(),
    phone: zod_1.z.number().positive(),
    registerDate: zod_1.z.string()
});
exports.contactCreateSchema = exports.contactSchema.omit({
    id: true,
    registerDate: true
});
exports.contactUpdateSchema = exports.contactSchema.omit({ id: true }).partial();
exports.contactReadSchema = zod_1.z.array(exports.contactSchema);
/**
 * @openapi
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - completeName
 *         - email
 *         - phone
 *       properties:
 *         completeName:
 *           type: string
 *           default: "Gustavo Medeiros"
 *         email:
 *           type: string
 *           default: "gustavo@example.com"
 *         phone:
 *           type: number
 *           default: 123456
 *     Contacts:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Contact'
 *     ContactsResponse:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *           completeName:
 *             type: string
 *           email:
 *             type: string
 *           phone:
 *             type: number
 *           registerDate:
 *             type: string
 */ 
