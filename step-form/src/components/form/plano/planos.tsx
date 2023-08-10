import Arcade from "../../../../public/images/icon-arcade.svg";
import Avançado from "../../../../public/images/icon-advanced.svg";
import pro from "../../../../public/images/icon-pro.svg";

import { ImageComponent } from "@/tools/image";
import { useEffect, useState } from "react";
import { usePlanContext } from "../../../../context/ContextPlano";
import { useStore } from "zustand";
import Link from "next/link";

export function formataDinheiro(number: number) {
  const valueformatado = number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return valueformatado;
}

const planos = [
  {
    id: 1,
    nome: "Arcade",
    imagem: Arcade,
    width: 50,
    height: 50,
    alt: "imagem do plano basico",
    mensal: 43.1,
    anual: 431.09,
  },
  {
    id: 2,
    nome: "Avançado",
    imagem: Avançado,
    width: 50,
    height: 50,
    alt: "imagem do plano Avançado",
    mensal: 57.48,
    anual: 574.79,
  },
  {
    id: 3,
    nome: "pro",
    imagem: pro,
    width: 50,
    height: 50,
    alt: "imagem do plano pro",
    mensal: 71.85,
    anual: 718.48,
  },
];

export function Plans({ setOn = false }) {
  const {
    actions: { adicionarPlanoNome },
  } = useStore(usePlanContext);

  const [state, setState] = useState(1);

  function planoAtual() {
    const nome =
      setOn === false
        ? `${planos[state - 1].nome} (Mensal)`
        : `${planos[state - 1].nome} (Anual)`;
    const valor =
      setOn === false ? planos[state - 1].mensal : planos[state - 1].anual;

    adicionarPlanoNome(nome, valor);
  }

  return (
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
            <ImageComponent
              imagem={imagem}
              width={width}
              height={height}
              alt={alt}
            />

            <div>
              {nome}
              <span>
                {setOn === false
                  ? formataDinheiro(mensal)
                  : formataDinheiro(anual)}
              </span>
              <span>{setOn === true ? "dois meses gratis" : null}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
