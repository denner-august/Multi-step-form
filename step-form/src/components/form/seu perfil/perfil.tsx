"use client"
import { useForm } from 'react-hook-form';
import s from './styles.module.scss';
import { userStore } from '../../../../context/zustand1';
import { Header } from '@/tools/header';

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
                <Header titulo='Cadastro pessoal' subtitulo='Informe seu nome, email telefone'/>
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

