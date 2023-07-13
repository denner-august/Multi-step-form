"use client"
import { useForm } from 'react-hook-form';
import s from './styles.module.scss';
import { userStore } from '../../../../context/zustand1';

export function Perfil() {
    const { actions:{ProximaEtapa,EtapaAnterior}} = userStore()

    const {register, handleSubmit,formState:{errors}} = useForm()

    function formResposta(data:any, ){
        console.log(data)
        ProximaEtapa()
    }

    return (
        <div className={s.Container}>

            <div className={s.titulo}>
                <h1>Cadastro pessoal</h1>
                <span>Informe seu nome, email telefone.</span>
            </div>

            <form onSubmit={handleSubmit(formResposta)}>
                <span>Nome</span>
                <input type="text" placeholder='Digite seu nome' {...register('nome')} />

                <span>Email</span>
                <input type="email" placeholder='Digite seu Email' {...register('email')} />

                <span>Telefone</span>
                <input type="number" placeholder='Digite seu telefone' {...register('telefone')} />

                <button type="submit">proximo</button>
            </form>
        </div>
    )
}

