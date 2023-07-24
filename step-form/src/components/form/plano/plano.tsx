'use client'
import { useState } from "react";
import { Switch, Stack } from "@chakra-ui/react";
import s from "./styles.module.scss";
import { usePlanContext } from "../../../../context/ContextPlano";

import { ImageComponent } from "@/tools/image";

import {planos} from './planos'
import { Header } from "@/tools/header";
import { Button } from "@/tools/button";

import{useStore} from 'zustand'

export function Plano() {
  const {actions:{adicionarPlanoNome, adicionarPlanoValue}} = useStore(usePlanContext)


  const [state, setState] = useState(1);
  const [setOn, setOff] = useState(false);

  function planoAtual(id:number){
   
    adicionarPlanoNome(planos[id -1].nome),
    setOn ? adicionarPlanoValue(planos[id -1].anual) : adicionarPlanoValue(planos[id -1].mensal)
    setState(id)
  }

  return (
    <div className={s.Container}>
      <div>     
        <Header titulo="Escolha seu plano" subtitulo="Você pode escolher pagamento mensal ou anual"/>  
      </div>

      <ul>
        {planos.map(({ id, nome, imagem, height, width, alt, mensal, anual }) => {
          return (
            <li
              key={id}
              style={{
                borderColor: state === id ? " rgb(95, 79, 167)" : undefined,
              }}
              onClick={() => planoAtual(id)}
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

      <Button BackButton={undefined} NextButton={undefined} render={undefined}/>
    </div>
  );
}
