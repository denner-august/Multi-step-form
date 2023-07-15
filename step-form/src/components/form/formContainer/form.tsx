"use client"
import s from './styles.module.scss';
import { userStore } from '../../../../context/zustand1';
import {Perfil} from '../seu perfil/perfil'
import { Plano } from '../plano/plano';
import { Extras } from '../extras/extras';

export function Form() {
    const { state:{etapas}} = userStore()

   function formController(){
    switch (etapas) {
        case 1:
           return <Perfil/>
          
        case 2:
           return  <Plano/>

        case 3:
            return <Extras/>

        case 4:
            return <h4>resumo</h4>
            
        default:
            return
       }
   }

    return (
        <div className={s.Container}>
            {formController()}
        </div>
    )
}

