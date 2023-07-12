"use client"
import { generationNumberSteps } from './function'
import s from './styles.module.scss'
export function Etapas() {
    return (
        <aside className={s.Container}>
           <ul className={s.Container_list}>
               {generationNumberSteps()}
           </ul>
        </aside>
    )
}