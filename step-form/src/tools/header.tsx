
interface headerProps{
 titulo:string,
 subtitulo:string,
}
export function Header({titulo='titulo', subtitulo='subtitulo'}:headerProps){
 return(
  <>
   <h1>{titulo}</h1>
   <span>{subtitulo}</span>
  </>
 )
}