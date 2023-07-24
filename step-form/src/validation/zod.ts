import {z} from 'zod'

const validationFromForm = z.object({
  nome:z.string().min(1, {message:"Digite um nome valido"}),
  email:z.string().email({message:"digite um email valido"}),
  telefone:z.string().min(9,{message:"digite um telefone valido"})
})

const validationFormPlan = z.object({
 plano:z.string()
})

export const ContextValidation = {
 dados:validationFromForm,
 planos: validationFormPlan
}