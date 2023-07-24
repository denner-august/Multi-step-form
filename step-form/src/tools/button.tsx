import { userStore } from '../../context/zustand1'
import s from './styleTools/button.module.scss'

interface buttonProps{
  NextButton:string | undefined,
  BackButton:string | undefined,
  render:Boolean | undefined
}

export function Button({render=true, BackButton="Voltar", NextButton="Proximo passo"}: buttonProps){
 const { actions:{ProximaEtapa, EtapaAnterior}} = userStore()

 return (
  <div className={s.Buttons}>
  {render === true ?  <button onClick={EtapaAnterior}>{BackButton}</button> : null }
  <button  onClick={ProximaEtapa} type='submit'>{NextButton}</button>
</div>
 )
}