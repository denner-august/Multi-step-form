
import {create } from 'zustand'

export interface  etapaProps {
 ExtrasPlano?:{nome:string, value:string}[]

}

interface actionsProps {
 adicionarExtras: (o:{nome:string, value:string}[]) => void,
}

interface stateProps {
 state: etapaProps
 actions:actionsProps
}

export const ExtrasContext = create<stateProps>((set)=> ({
 state:{
  ExtrasPlano:[{nome:"", value:""}],
 
 },

 actions:{
  adicionarExtras: (o) => set((state) => ({ state: { ExtrasPlano: o }})),
 }
}))
