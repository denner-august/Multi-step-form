import s from "./styles.module.scss";

import { Header } from "@/tools/header";
import { Button } from "@/tools/button";

import { useForm } from "react-hook-form";
import { userStore } from "../../../../context/zustand1";
import { useState } from "react";

export function Extras() {
  const { actions:{ProximaEtapa, EtapaAnterior}} = userStore()

  const { register, handleSubmit } = useForm();

  const [FormChoice, setFormChoice] = useState("")

  function extras(e:any){
    console.log(e);    
    if(FormChoice === "avançar"){
      return ProximaEtapa()
    }

    return EtapaAnterior()
    
  }

  const planos = {
    a: 4.8,
    b: 9.6,
    c: 9.6,
  };

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
              <input {...register("uncontrolled")} type="checkbox" value={planos.a} />

              <div>
                <span>Jogar online</span>
                <span>Acesso a varios jogos</span>
              </div>

              <span>
                {planos.a.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                /mes
              </span>
            </li>
            <li>
              <input {...register("uncontrolled")} type="checkbox" value={planos.b} />

              <div>
                <span>Grande espaço</span>
                <span>Espaço extra de 1tb na cloud</span>
              </div>
              <span>
                {planos.b.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                /mes
              </span>
            </li>
            <li>
              <input {...register("uncontrolled")} type="checkbox" value={planos.c} />

              <div>
                <span>Costumize seu perfil</span>
                <span>Costumize o tema do seu perfil</span>
              </div>
              <span>
                {planos.c.toLocaleString("pt-br", {
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
