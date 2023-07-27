import { Button } from "@/tools/button";
import { Header } from "@/tools/header";

import s from "./resumo.module.scss";
import { useStore } from "zustand";
import { userStore } from "../../../../context/zustand1";
import { usePlanContext } from "../../../../context/ContextPlano";
import { ExtrasContext } from "../../../../context/extrasForm";

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
    // const total = Number(planoValue)

  }

  return (
    <div className={s.Container}>
      <Header
        titulo="Finalizando Cadastro"
        subtitulo="Verifique se todas informações estão corretas"
      />

      <div className={s.resumo}>
        <p>{planoNome}</p>

        <div className={s.plano}>
          <button>Mudar</button>
          <p>{planoValue}</p>
        </div>

        <hr />
          {ExtrasPlano?.map(item => {
            return (
              <div className={s.plano} key={item.nome}>
                <p>{item.nome}</p>
                <p>{item.value}</p>
              
              </div>
            )
          })}
      </div>
          <span>total por ano  </span>

      <Button>
        <button onClick={EtapaAnterior} type="submit">
          voltar
        </button>
        <button type="submit">Confirmar</button>
      </Button>
    </div>
  );
}
