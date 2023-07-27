import s from '../styles/header.module.scss'

interface headerProps{
 titulo:string,
 subtitulo:string,
}
export function Header({titulo='titulo', subtitulo='subtitulo'}:headerProps){
 return(
  <>
   <h1 className={s.titulo} >{titulo}</h1>
   <span className={s.subtitulo}>{subtitulo}</span>
  </>
 )
}