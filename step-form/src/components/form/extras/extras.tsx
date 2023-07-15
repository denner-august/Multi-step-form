import s from "./styles.module.scss";

import { Header } from "@/tools/header";
import { Button } from "@/tools/button";

import { useForm } from "react-hook-form";

export function Extras() {
  const { register, handleSubmit } = useForm();

  const e = (data: any) => console.log(data);

  const planos = {
    a: 4.8,
    b: 9.6,
    c: 9.6,
  };

  return (
    <form onSubmit={handleSubmit(e)}>
      <div className={s.Container}>
        <Header
          titulo="Melhore sua experiência"
          subtitulo="Como podemos melhorar sua experiência."
        />

        <section>
          <ul>
            <li>
              <input {...register("uncontrolled")} type="checkbox" value="A" />

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
              <input {...register("uncontrolled")} type="checkbox" value="B" />

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
              <input {...register("uncontrolled")} type="checkbox" value="C" />

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

        <Button BackButton={undefined} NextButton={undefined} render={true} />
      </div>
    </form>
  );
}
