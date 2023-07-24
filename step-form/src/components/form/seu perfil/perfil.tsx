"use client"
import s from './styles.module.scss';
import { FieldErrors, useForm } from 'react-hook-form';
import { Header } from '@/tools/header';
import { formProps } from '@/types/formProps';
import { userStore } from '../../../../context/zustand1';
import {etapaProps, useFormContext} from '../../../../context/Contextform'

import {zodResolver} from '@hookform/resolvers/zod'
import { ContextValidation } from '@/validation/zod';

export function Perfil() {
    const { actions:{ProximaEtapa}} = userStore();
    const {actions:{adicionarNome,adicionarEmail,adicionarTelefone}} = useFormContext()

    async function formResposta({nome,email, telefone}:formProps ){
        adicionarNome(nome)
        adicionarEmail(email)
        adicionarTelefone(telefone)
        ProximaEtapa()
    };

    const {register, handleSubmit,formState:{errors}, setError,  } = useForm<formProps>({
        resolver:zodResolver(ContextValidation.dados),       
    });
    

    return (
        <div className={s.Container}>

            <div className={s.titulo}>
                <Header titulo='Cadastro pessoal' subtitulo='Informe seu nome, email telefone'/>
            </div>

            <form onSubmit={handleSubmit(formResposta)}>
                <span>Nome {errors.nome?.message && `${errors.nome.message}`} </span>
              
                <input alt='nome' type="text" placeholder={"Digite seu nome"} {...register('nome')}  />

                <span>Email {errors.email?.message && `${errors.email?.message}`}  </span>
                
                <input alt='email' type="email" placeholder='Digite seu Email' {...register('email')}  />

                <span>Telefone {errors.telefone?.message && `${errors.telefone?.message}`}</span>

                <input alt='telefone' type="number" placeholder='Digite seu telefone' {...register('telefone')} />

                <button type="submit">proximo</button>
            </form>
        </div>
    )
}

