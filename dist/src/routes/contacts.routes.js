"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const dataIsValid_middleware_1 = require("../middlewares/dataIsValid.middleware");
const contact_schema_1 = require("../schemas/contact.schema");
const controllers_1 = require("../controllers");
const contactOwner_middleware_1 = require("../middlewares/contactOwner.middleware");
exports.contactsRouter = express_1.default.Router();
exports.contactsRouter.use(auth_middleware_1.authMiddleware);
/**
 * @openapi
 * '/contact':
 *  post:
 *     tags:
 *     - Contact
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Contact'
 *     responses:
 *       200:
 *         description: Contact created
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/contactResponse'
 *           example:
 *             "id": "123dasdbh123@#djas$*asj"
 *             "completeName": "Gustavo Medeiros"
 *             "email": "gustavo@example.com"
 *             "phone" : 123456
 *
 *          "registerDate" : "2015-12-01T00:00:00"
 */
exports.contactsRouter.post("", (0, dataIsValid_middleware_1.dataIsValidMiddleware)(contact_schema_1.contactCreateSchema), (req, res) => controllers_1.contactController.create(req, res));
/**
   * @openapi
   * '/contact/{contactId}':
   *  get:
   *     tags:
   *     - Contact
   *     summary: Get a single contact by the contactId
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the contact
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/contactResponse'
   *       404:
   *         description: Contact not found
   *  patch:
   *     tags:
   *     - Contact
   *     summary: Update a single contact
   *     parameters:
   *      - name: contactId
   *        in: path
   *        description: The id of the contact
   *        required: true
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schema/Contact'
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/contactResponse'
   *       403:
   *         description: Forbidden
   *       404:
   *         description: Contact not found
   *  delete:
   *     tags:
   *     - Contact
   *     summary: Delete a single contact
   *     parameters:
   *      - name: contactId
   *        in: path
   *        description: The id of the contact
   *        required: true
   *     responses:
   *       200:
   *         description: Contact deleted
   *       403:
   *         description: Forbidden
   *       404:
   *         description: Contact not found
   */
exports.contactsRouter.get("/:id", (req, res) => controllers_1.contactController.list(req, res));
/**
 *@openapi
 *'/contact':
 *   get:
 *     tags:
 *       - Contacts
 *     summary: Get contacts with TOKEN
 *     security:
 *       - bearerAuth: []  # Add security here
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContactsResponse'
 *             example:
 *               - id: "123dasdbh123@#djas$*asj"
 *                 completeName: "Gustavo Medeiros"
 *                 email: "gustavo@example.com"
 *                 phone: 123456
 *                 registerDate: "2015-12-01T00:00:00"
 *               - id: "456defgh456@#ijkl$*mnop"
 *                 completeName: "Another Name"
 *                 email: "another@example.com"
 *                 phone: 789012
 *                 registerDate: "2022-02-14T12:34:56"
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
exports.contactsRouter.get("", (req, res) => controllers_1.contactController.listAll(req, res));
exports.contactsRouter.patch("/:id", contactOwner_middleware_1.contactOwnerMiddleware, (0, dataIsValid_middleware_1.dataIsValidMiddleware)(contact_schema_1.contactUpdateSchema), (req, res) => controllers_1.contactController.update(req, res));
exports.contactsRouter.delete("/:id", contactOwner_middleware_1.contactOwnerMiddleware, (req, res) => controllers_1.contactController.remove(req, res));
