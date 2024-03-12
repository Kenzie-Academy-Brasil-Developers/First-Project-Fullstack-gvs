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
exports.clientOwnerMiddleware = void 0;
const AppError_1 = require("../errors/AppError");
const repositories_1 = require("../repositories");
const clientOwnerMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.clientId;
    const client = yield repositories_1.clientRepository.findOne({
        where: {
            id: clientId
        },
    });
    if (!client) {
        throw new AppError_1.AppError("client not found", 404);
    }
    if (client.id !== clientId) {
        throw new AppError_1.AppError("You dont have permissions", 403);
    }
    return next();
});
exports.clientOwnerMiddleware = clientOwnerMiddleware;
