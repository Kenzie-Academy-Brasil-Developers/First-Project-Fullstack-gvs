"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const bcryptjs_1 = require("bcryptjs");
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = require("jsonwebtoken");
const repositories_1 = require("../repositories");
class LoginService {
    createToken(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = data;
            const foundUser = yield repositories_1.clientRepository.findOne({
                where: {
                    email
                }
            });
            if (!foundUser) {
                throw new AppError_1.AppError('Invalid credentials', 401);
            }
            const isPassMatch = yield (0, bcryptjs_1.compare)(password, foundUser.password);
            if (!isPassMatch) {
                throw new AppError_1.AppError("Invalid credentials", 401);
            }
            const token = yield (0, jsonwebtoken_1.sign)({ clientId: foundUser.id }, process.env.SECRET_KEY, { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN });
            return token;
        });
    }
}
exports.LoginService = LoginService;
