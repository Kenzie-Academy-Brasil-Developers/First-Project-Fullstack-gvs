import {z} from "zod"

export const TechFormSchema = z.object({
    title: z.string().nonempty("Titulo obrigatorio!"),
    status: z.string()
})