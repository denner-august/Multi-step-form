import { userStore } from "../../../context/zustand1";
import { ChangeGenerationBackground } from "./changeBackground";

export function generationNumberSteps() {
  const {
    state: { etapas },
  } = userStore();

  const number = [
    { number: 1, msg: "Seu perfil" },
    { number: 2, msg: "Selecione seu plano" },
    { number: 3, msg: "Add extras" },
    { number: 4, msg: "Resumo" },
  ];

  return number.map(({ number, msg }) => {
    return (
      <li key={msg}>
        <div
          style={{
            backgroundColor: `${ChangeGenerationBackground.generationBackgrund(
              number,
              etapas
            )}`,
            color: `${ChangeGenerationBackground.generationColor(
              number,
              etapas
            )}`,
          }}
        >
          <p>{number}</p>
        </div>

        <div>
          <p>Etapa {number}</p>
          <p>{msg}</p>
        </div>
      </li>
    );
  });
}
