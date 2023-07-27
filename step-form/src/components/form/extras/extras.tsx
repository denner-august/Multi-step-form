import s from "./styles.module.scss";

import { Header } from "@/tools/header";
import { Button } from "@/tools/button";

import { useForm } from "react-hook-form";
import { userStore } from "../../../../context/zustand1";
import { useState } from "react";

import { ExtrasContext } from "../../../../context/extrasForm";

export function Extras() {
  const { actions:{ProximaEtapa, EtapaAnterior}} = userStore()
  const { actions:{adicionarExtras}} = ExtrasContext()

  const { register, handleSubmit } = useForm();

  const [FormChoice, setFormChoice] = useState("")

  async function extras(e:any){  

    if(e.uncontrolled === false){
      caminho()
      return
    }
    

    let organiza = e.uncontrolled.map((item:any) => {
      return {nome:item.split(',')[0], value:item.split(',')[1]}
    })
    
    adicionarExtras(organiza)    

    caminho()
  }

  function caminho(){
    if(FormChoice === "avançar"){
      return ProximaEtapa()
    }

    return EtapaAnterior()
  }


  const planos = [
    {nome:"Jogar online", value: 4.8},
    {nome:"Espaço extra", value: 9.6},
    {nome:"Costumizar perfil", value:9.6}
  ]

  return (
    <form onSubmit={handleSubmit(extras)} >
      <div className={s.Container}>
        <Header
          titulo="Melhore sua experiência"
          subtitulo="Como podemos melhorar sua experiência."
        />

        <section>
          <ul>
            <li>
              <input {...register("uncontrolled")} type="checkbox" value={[planos[0].nome, `${planos[0].value}`]} />

              <div>
                <span>Jogar online</span>
                <span>Acesso a varios jogos</span>
              </div>

              <span>
                {planos[0].value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                /mes
              </span>
            </li>
            <li>
              <input {...register("uncontrolled")} type="checkbox" value={[planos[1].nome, `${planos[1].value}`]} />

              <div>
                <span>Grande espaço</span>
                <span>Espaço extra de 1tb na cloud</span>
              </div>
              <span>
                {planos[1].value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                /mes
              </span>
            </li>
            <li>
              <input {...register("uncontrolled")} type="checkbox" value={[ planos[2].nome , `${planos[2].value}`]} />

              <div>
                <span>Costumize seu perfil</span>
                <span>Costumize o tema do seu perfil</span>
              </div>
              <span>
                {planos[2].value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                /mes
              </span>
            </li>
          </ul>
        </section>

        <Button>
              <button type="submit" onClick={()=> setFormChoice("voltar")}>Voltar</button>
              <button type="submit" onClick={()=> setFormChoice("avançar")}>Proxima etapa</button>
        </Button>
         
      </div>
    </form>
  );
}
