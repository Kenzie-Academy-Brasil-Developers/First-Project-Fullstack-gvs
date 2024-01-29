import { hash } from "bcryptjs";
import { AppError } from "../errors/AppError";
import { TClient, TClientCreate, TClientUpdate, TClientsRead } from "../interfaces/client.interface";
import { clientRepository } from "../repositories";
import { clientCreateSchema, clientSchemaReturn, clientUpdateSchema, clientsReadSchema } from "../schemas/client.schema";

export class ClientService{
    async createClient(data: TClientCreate){
        const { completeName, email, password, phone } = data
        const foundUser = await clientRepository.findOne({
            where: {
                email
            }
        })
        if(foundUser){
            throw new AppError('Client already exists')
        }
        const hashedPass = await hash(password, 10)
        const client =  clientRepository.create({
            completeName, email, password: hashedPass, phone
        })  
        await clientRepository.save(client)
        return clientSchemaReturn.parse(client)
    }
    async list(){
        const clients : TClientsRead = await clientRepository.find()
        return clientSchemaReturn.parse(clients)
    }
    async update(data: TClientUpdate, client: TClient ){
        const foundClient = clientRepository.create({...client, ...data})
        const newClient = await clientRepository.save(foundClient)
        return clientSchemaReturn.parse(newClient)
    }
    async delete(clientId: string ){
        const foundClient = await clientRepository.findOne({
            where:{
                id: clientId,
            }
        })
        if(!foundClient){
            throw new AppError('Client not found.',404)
        }
        await clientRepository.remove(foundClient)
    }
 }