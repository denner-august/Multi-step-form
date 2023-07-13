'use client'
import { useState } from "react";
import { Switch, Stack } from "@chakra-ui/react";
import { userStore } from "../../../../context/zustand1";

import s from "./styles.module.scss";

import { ImageComponent } from "@/tools/image";

import {planos} from './planos'

export function Plano() {
 const { actions:{ProximaEtapa, EtapaAnterior}} = userStore()

  const [state, setState] = useState(1);
  const [setOn, setOff] = useState(false);

  return (
    <div className={s.Container}>
      <div>
       <h2>Escolha seu plano</h2>
       <span>você pode escolher pagamento mensal ou anual</span>
      </div>

      <ul>
        {planos.map(({ id, nome, imagem, height, width, alt, mensal, anual }) => {
          return (
            <li
              key={id}
              style={{
                borderColor: state === id ? " rgb(95, 79, 167)" : undefined,
              }}
              onClick={() => setState(id)}
            >
              <ImageComponent imagem={imagem} width={width} height={height} alt={alt}/>
              
                <div>
                  {nome}
                  <span>{setOn === false ? mensal : anual }</span>
                  <span>{setOn === true ? 'dois meses gratis' : null }</span>
                </div>
            </li>
          );
        })}
      </ul>

      <div className={s.divCheckBox}>
        <span style={{color:setOn === false ? 'blue': undefined}}>Mensal</span>
        <Stack direction="row">
          <Switch colorScheme="blue" size="lg" onChange={(e)=> setOff(e.target.checked)} />
        </Stack>
        <span style={{color:setOn === true ? 'blue': undefined}} >Anual</span>
      </div>

      <div className={s.Buttons}>
        <button onClick={EtapaAnterior}>Voltar</button>
        <button onClick={ProximaEtapa}>Proximo passo</button>
      </div>
    </div>
  );
}
