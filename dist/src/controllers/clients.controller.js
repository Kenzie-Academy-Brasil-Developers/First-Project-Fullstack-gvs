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
exports.ClientController = void 0;
class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqBody = req.body;
            const newClient = yield this.clientService.create(reqBody);
            return res.status(201).json(newClient);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = res.locals.clientId;
            const client = yield this.clientService.list(id);
            return res.json(client);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqBody = req.body;
            const client = res.locals.clientId;
            const updateClient = yield this.clientService.update(reqBody, client);
            return res.status(200).json(updateClient);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = res.locals.clientId;
            const removeClient = yield this.clientService.remove(client);
            return res.status(200);
        });
    }
}
exports.ClientController = ClientController;
