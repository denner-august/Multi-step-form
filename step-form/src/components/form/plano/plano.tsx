"use client";
import { useState } from "react";
import { Switch, Stack } from "@chakra-ui/react";
import s from "./styles.module.scss";

import { Plans } from "./planos";
import { Header } from "@/tools/header";
import { Button } from "@/tools/button";

import { userStore } from "../../../../context/zustand1";

export function Plano() {
  const {
    actions: { ProximaEtapa, EtapaAnterior },
  } = userStore();

  const [setOn, setOff] = useState(false);

  return (
    <div className={s.Container}>
      <div>
        <Header
          titulo="Escolha seu plano"
          subtitulo="Você pode escolher pagamento mensal ou anual"
        />
      </div>

      <Plans setOn={setOn} />

      <div className={s.divCheckBox}>
        <span style={{ color: setOn === false ? "blue" : undefined }}>
          Mensal
        </span>
        <Stack direction="row">
          <Switch
            colorScheme="blue"
            size="lg"
            onChange={(e) => setOff(e.target.checked)}
          />
        </Stack>
        <span style={{ color: setOn === true ? "blue" : undefined }}>
          Anual
        </span>
      </div>

      <Button>
        <button onClick={() => EtapaAnterior()}>Voltar</button>
        <button onClick={() => ProximaEtapa()} type="submit">
          Proxima etapa
        </button>
      </Button>
    </div>
  );
}
