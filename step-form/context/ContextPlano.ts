
import {create } from 'zustand'

export interface  etapaProps {
 planoNome?:string
 PlanoValue?:string
}

interface actionsProps {
 adicionarPlanoNome: (nome:string) => void
 adicionarPlanoValue: (value:string) => void
}

interface stateProps {
 state: etapaProps
 actions:actionsProps
}

export const usePlanContext = create<stateProps>((set)=> ({
 state:{
  planoNome:"",
  PlanoValue:""
 },

 actions:{
  adicionarPlanoNome: (nome) => set(() => ({ state: { planoNome: nome }})),
  adicionarPlanoValue: (value) => set(() => ({ state: { PlanoValue: value }}))
 }
}))
