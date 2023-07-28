import { Button } from "@/tools/button";
import { Header } from "@/tools/header";

import s from "./resumo.module.scss";
import { useStore } from "zustand";
import { userStore } from "../../../../context/zustand1";
import { usePlanContext } from "../../../../context/ContextPlano";
import { ExtrasContext } from "../../../../context/extrasForm";
import { formataDinheiro } from "../plano/planos";

export function Resumo() {
  const {
    actions: { ProximaEtapa, EtapaAnterior },
  } = useStore(userStore);
  const {
    state: {
      planoForm: { planoNome, planoValue },
    },
  } = useStore(usePlanContext);

  const {state:{ExtrasPlano}} = useStore(ExtrasContext)

  function TotalAnual(){
   
    const planoCalc = ExtrasPlano?.reduce((preve, next) => preve + Number(next.value),0 )

    let TotalPlan = Number(planoCalc) + planoValue
    
    return formataDinheiro(Number(TotalPlan))

  }

  return (
    <div className={s.Container}>
     
     <div>
     <Header
        titulo="Finalizando Cadastro"
        subtitulo="Verifique se todas informações estão corretas"
      />
     </div>

      <div className={s.resumo}>
        <p>{planoNome}</p>

        <div className={s.plano}>
          <button>Mudar</button>
          <p>{formataDinheiro(planoValue)}</p>
        </div>

        <hr />
          {ExtrasPlano?.map(item => {
            return (
              <div className={s.plano} key={item.nome}>
                <p>{item.nome}</p>
                <p>{formataDinheiro(Number(item.value))}</p>
              
              </div>
            )
          })}
      </div>
          
      <div className={s.pagamento}>
        <span>total por ano   </span>
        <span>{TotalAnual()}</span>
      </div>

      <Button>
        <button onClick={EtapaAnterior} type="submit">
          voltar
        </button>
        <button onClick={ProximaEtapa} type="submit">Confirmar</button>
      </Button>
    </div>
  );
}
