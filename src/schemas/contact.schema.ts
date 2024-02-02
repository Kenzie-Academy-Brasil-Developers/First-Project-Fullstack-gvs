import { z } from "zod"

export const contactSchema = z.object({
    id: z.string(),
    completeName: z.string().min(1).max(120),
    email: z.string().email(),
    phone: z.number().positive(),
    registerDate: z.string()
})

export const contactCreateSchema = contactSchema.omit({
    id: true,
    registerDate: true
})

export const contactUpdateSchema = contactSchema.omit({id:true}).partial()

export const contactReadSchema = z.array(contactSchema)