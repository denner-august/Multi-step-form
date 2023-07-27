
import {create } from 'zustand'

export interface  etapaProps {
 planoForm:{planoNome:string, planoValue:string}
}

// planoNome?:string
// PlanoValue?:string
interface actionsProps {
 adicionarPlanoNome: (nome:string, value:string) => void
}

interface stateProps {
 state: etapaProps
 actions:actionsProps
}

export const usePlanContext = create<stateProps>((set)=> ({
 state:{
  planoForm:{planoNome:"", planoValue:""},

 },

 actions:{
  adicionarPlanoNome: (nome, value) => set(() => ({ state: {planoForm:{planoNome:nome , planoValue:value}}})),
 }
}))
