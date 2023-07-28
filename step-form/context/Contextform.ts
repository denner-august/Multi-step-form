
import {create } from 'zustand'

export interface  etapaProps {
 nome?:string,
 email?:string,
 telefone?:string
}

interface actionsProps {
 adicionarNome: (nome?:string) => void,
 adicionarEmail: (Email?:string) => void,
 adicionarTelefone: (telefone?:string) => void,
}

interface stateProps {
 state: etapaProps
 actions:actionsProps
}

export const useFormContext = create<stateProps>((set)=> ({
 state:{
  nome:"",
  email:"",
  telefone:"",
 },

 actions:{
  adicionarNome: (nomeando) => set(() => ({ state: { nome: nomeando }})),
  adicionarEmail: (email) => set(() => ({ state: { email: email }})),
  adicionarTelefone: (Telefone) => set(() => ({ state: { telefone: Telefone }}))
 }
}))
