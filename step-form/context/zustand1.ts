
import {create } from 'zustand'

interface  etapaProps {
 etapas:number
}

interface actionsProps {
 ProximaEtapa: () => void,
 EtapaAnterior: () => void,
}

interface stateProps {
 state: etapaProps
 actions:actionsProps
}

export  const userStore = create<stateProps>((set)=> ({
 state:{
  etapas:1,
 },

 actions:{
  ProximaEtapa: () => set((state) => ({ state: { etapas: state.state.etapas >= 5 ? state.state.etapas : state.state.etapas + 1} })),
  EtapaAnterior: () => set((state) => ({state: {etapas: state.state.etapas - 1}}))
 }
}))

