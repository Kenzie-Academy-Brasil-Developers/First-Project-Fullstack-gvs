"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRepository = exports.clientRepository = void 0;
const data_source_1 = require("./data-source");
const client_entity_1 = require("./entities/client.entity");
const contacts_entity_1 = require("./entities/contacts.entity");
exports.clientRepository = data_source_1.AppDataSource.getRepository(client_entity_1.Client);
exports.contactsRepository = data_source_1.AppDataSource.getRepository(contacts_entity_1.Contact);
