import { ReactElement, ReactNode } from 'react'
import s from './styleTools/button.module.scss'

interface buttonProps{
  children:ReactNode
}

export function Button({children}: buttonProps){

 return (
  <div className={s.Buttons}>
    {children}
  </div>
 )
}