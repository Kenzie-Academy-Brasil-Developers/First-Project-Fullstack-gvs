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
exports.ClientService = void 0;
const bcryptjs_1 = require("bcryptjs");
const AppError_1 = require("../errors/AppError");
const repositories_1 = require("../repositories");
const client_schema_1 = require("../schemas/client.schema");
class ClientService {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { completeName, email, password, phone } = data;
            const foundUser = yield repositories_1.clientRepository.findOne({
                where: {
                    email
                }
            });
            if (foundUser) {
                throw new AppError_1.AppError('Client already exists');
            }
            const hashedPass = yield (0, bcryptjs_1.hash)(password, 10);
            const client = repositories_1.clientRepository.create({
                completeName, email, password: hashedPass, phone
            });
            yield repositories_1.clientRepository.save(client);
            return client_schema_1.clientSchemaReturn.parse(client);
        });
    }
    list(clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield repositories_1.clientRepository.findOne({ where: { id: clientId } });
            if (!client) {
                throw new AppError_1.AppError('Client not found.', 404);
            }
            return client_schema_1.clientSchemaReturn.parse(client);
        });
    }
    update(data, clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundClient = repositories_1.clientRepository.findOne({ where: { id: clientId } });
            if (!foundClient) {
                throw new AppError_1.AppError('Client not found', 404);
            }
            const updateClient = repositories_1.clientRepository.create(Object.assign(Object.assign({}, foundClient), data));
            yield repositories_1.clientRepository.save(updateClient);
            return client_schema_1.clientSchemaReturn.parse(updateClient);
        });
    }
    remove(clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundClient = yield repositories_1.clientRepository.findOne({
                where: {
                    id: clientId,
                }
            });
            if (!foundClient) {
                throw new AppError_1.AppError('Client not found.', 404);
            }
            yield repositories_1.clientRepository.remove(foundClient);
        });
    }
}
exports.ClientService = ClientService;
