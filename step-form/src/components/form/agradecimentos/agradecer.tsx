import s from "./styles.module.scss";
import email from "../../../../public/images/obrigado.png";
import { ImageComponent } from "../../../tools/image";

export function Obrigado() {
  return (
    <div className={s.Container}>
      <ImageComponent
        imagem={email}
        height={70}
        width={70}
        alt="icone de email"
      />
      <h1>Obrigado !</h1>
      <p>
        Obrigado por confirmar a sua inscrição, agora você pode usar a nossa
        plataforma caso precise de suporte nós envie um email para
        suporte@gmail.com
      </p>
    </div>
  );
}
