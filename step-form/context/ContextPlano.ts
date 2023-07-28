
import {create } from 'zustand'

export interface  etapaProps {
 planoForm:{planoNome:string, planoValue:number}
}

interface actionsProps {
 adicionarPlanoNome: (nome:string, value: number) => void
}

interface stateProps {
 state: etapaProps
 actions:actionsProps
}

export const usePlanContext = create<stateProps>((set)=> ({
 state:{
  planoForm:{planoNome:"", planoValue: 0},

 },

 actions:{
  adicionarPlanoNome: (nome, value) => set(() => ({ state: {planoForm:{planoNome:nome , planoValue:value}}})),
 }
}))
