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
exports.ContactController = void 0;
class ContactController {
    constructor(contactService) {
        this.contactService = contactService;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqBody = req.body;
            const client = res.locals.clientId;
            const newContact = yield this.contactService.create(reqBody, client);
            return res.json(newContact).status(201);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientId = res.locals.clientId;
            const contact = yield this.contactService.list(clientId);
            return res.json(contact);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactId = req.params.id;
            const contactData = req.body;
            const updatedContact = yield this.contactService.update(contactData, contactId);
            return res.json(updatedContact);
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactId = req.params.id;
            yield this.contactService.remove(contactId);
            return res.status(204).send();
        });
    }
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contacts = yield this.contactService.listAll();
            return res.json(contacts).status(200);
        });
    }
}
exports.ContactController = ContactController;
