import { z } from 'zod'

export const clientSchema = z.object({
    id: z.string(),
    completeName: z.string(),
    email: z.string().email(),
    password: z.string().min(1).max(120),
    phone:  z.number().positive(),
    registerDate: z.string(),
})
export const clientCreateSchema = clientSchema.omit({
    id: true,
    registerDate: true,
})
export const clientUpdateSchema = clientSchema.partial()

export const clientSchemaReturn = clientSchema.omit({
    password: true
})
export const clientsReadSchema = z.array(clientSchemaReturn)

export const clientLoginSchema = clientSchema.pick({
    email: true,
    password: true,
})

