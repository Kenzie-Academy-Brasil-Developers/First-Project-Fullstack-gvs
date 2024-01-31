import { AppError } from "../errors/AppError";
import { TContact, TContactCreate, TContactUpdate } from "../interfaces/contact.interface";
import { contactsRepository } from "../repositories";
import { contactCreateSchema, contactReadSchema, contactSchema, contactUpdateSchema } from "../schemas/contact.schema";

export class ContactService{
    async createContact(data: TContactCreate){
        const {completeName, email, phone} = data
        const foundContact = await contactsRepository.findOne({where: {email}})
        if (foundContact){
            throw new AppError('Email already exists.')
        }
        const foundPhoneContact = await contactsRepository.findOne({ where: { phone } });
        if (foundPhoneContact) {
            throw new AppError('Phone number already exists.');
        }

        const newContact =  contactsRepository.create({...data})
        await contactsRepository.save(newContact)
        return contactSchema.parse(newContact)
    }
    async list(){
        const contacts = await contactsRepository.find()
        return contactReadSchema.parse(contacts);
    }

    async update(data: TContactUpdate, contact: TContact){
        const foundContact = contactsRepository.create({...contact, ...data})
        const newContact =  contactsRepository.save(foundContact)
        return contactUpdateSchema.parse(newContact)
    }
    async delete(contactId: string ){
        const foundContact = await contactsRepository.findOne({
            where:{
                id: contactId,
            }
        })
        if(!foundContact){
            throw new AppError('Contact not found.',404)
        }
        await contactsRepository.remove(foundContact)
    }}