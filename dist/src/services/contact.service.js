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
exports.ContactService = void 0;
const AppError_1 = require("../errors/AppError");
const repositories_1 = require("../repositories");
const contact_schema_1 = require("../schemas/contact.schema");
class ContactService {
    create(data, clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield repositories_1.clientRepository.findOne({ where: { id: clientId } });
            if (!client) {
                throw new AppError_1.AppError('Client not found.', 404);
            }
            const foundEqualContact = yield repositories_1.contactsRepository.findOne({ where: { phone: data.phone } });
            if (foundEqualContact) {
                throw new AppError_1.AppError('Not possible add this contact!', 401);
            }
            const contact = repositories_1.contactsRepository.create(Object.assign(Object.assign({}, data), { client }));
            yield repositories_1.contactsRepository.save(contact);
            return contact_schema_1.contactSchema.parse(contact);
        });
    }
    list(clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield repositories_1.clientRepository.findOne({
                where: { id: clientId },
                relations: { contacts: true }
            });
            if (!client) {
                throw new AppError_1.AppError('Client not found.', 404);
            }
            return contact_schema_1.contactReadSchema.parse(client);
        });
    }
    update(data, contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundContact = yield repositories_1.contactsRepository.findOneBy({ id: contactId });
            if (!foundContact) {
                throw new AppError_1.AppError("Contact not found", 404);
            }
            const updateContact = yield repositories_1.contactsRepository.create(Object.assign(Object.assign({}, foundContact), data));
            yield repositories_1.contactsRepository.save(updateContact);
            return contact_schema_1.contactSchema.parse(updateContact);
        });
    }
    remove(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundContact = yield repositories_1.contactsRepository.findOne({
                where: {
                    id: contactId,
                }
            });
            if (!foundContact) {
                throw new AppError_1.AppError('Contact not found.', 404);
            }
            yield repositories_1.contactsRepository.remove(foundContact);
        });
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const contacts = yield repositories_1.contactsRepository.find();
            return contact_schema_1.contactReadSchema.parse(contacts);
        });
    }
}
exports.ContactService = ContactService;
