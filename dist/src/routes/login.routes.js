"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
exports.loginRouter = express_1.default.Router();
/**
   * @openapi
   * '/session/login':
   *  post:
   *    tags:
   *    - Session
   *    summary: Login access token
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/CreateSessionInput'
   *    responses:
   *      200:
   *        description: Session created
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateSessionResponse'
   *      401:
   *        description: Unauthorized
   */
exports.loginRouter.post('/login', (req, res) => controllers_1.loginController.login(req, res));
