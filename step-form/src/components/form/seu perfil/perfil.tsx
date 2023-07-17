"use client"
import { useForm } from 'react-hook-form';
import s from './styles.module.scss';
import { userStore } from '../../../../context/zustand1';
import { Header } from '@/tools/header';

export function Perfil() {
    const { actions:{ProximaEtapa}} = userStore();

    async function formResposta(data:any, ){
        ProximaEtapa()
    };

    const {register, handleSubmit,formState:{errors}} = useForm();

    return (
        <div className={s.Container}>

            <div className={s.titulo}>
                <Header titulo='Cadastro pessoal' subtitulo='Informe seu nome, email telefone'/>
            </div>

            <form onSubmit={handleSubmit(formResposta)}>
                <span>Nome</span>
                <input alt='nome' type="text" placeholder='Digite seu nome' {...register('nome')}/>

                <span>Email</span>
                <input alt='email' type="email" placeholder='Digite seu Email' {...register('email')}  />

                <span>Telefone</span>
                <input alt='telefone' type="number" placeholder='Digite seu telefone' {...register('telefone')} />

                <button type="submit">proximo</button>
            </form>
        </div>
    )
}

