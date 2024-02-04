import { z } from "zod";

export const registerFormSchema = z.object({
  completeName: z.string().nonempty("Nome obrigatorio!"),
  email: z
    .string()
    .nonempty("Email obrigatorio!")
    .email("Forneca um email valido"),
  password: z
    .string()
    .nonempty("Senha obrigatoria!")
    .min(8, "Sao necessarios pelo menos oito caracteres")
    .regex(/[A-Z]+/, "E necessario ao menos uma letra maiuscula")
    .regex(/[a-z]+/, "E necessario ao menos uma letra minuscula")
    .regex(/[0-9]+/, "E necessario ao menos um numero"),
  phone: z.string().nonempty("Escreva um numero de telefone"),
})