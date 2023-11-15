import Button from "../Button";
import {useState} from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import './formCad.css'

interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

const schema = yup.object().shape({
    nome: yup.string().required('Este campo é obrigatório'),
    email: yup.string().email('Email inválido').required('Este campo é obrigatório'),
    senha: yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres').required('Este campo é obrigatório'),
  });

function Form() {
    const [aviso, setAviso] = useState('');
    const { control, handleSubmit, formState: { errors } } = useForm<Usuario>({
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: Usuario) => {
        console.log(data);
        setAviso('Cadastro realizado com sucesso!');
      };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
             <div className='inputContainer'>
                  <h2>CADASTRO</h2>
                    <label htmlFor='nome'></label>
                    <Controller
                    name="nome"
                    control={control}
                    render={({ field }) => (
                    <input
                    type='text'
                    id='nome'
                    {...field}
                    placeholder='informe seu nome'
                    />
                    )}
                  />
            {errors.nome && <div className="error">{errors.nome.message}</div>}
                </div>
                <div className='inputContainer'>
                    <label htmlFor='email'></label>
                    <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                    <input
                    type='email'
                    id='email'
                    {...field}
                    placeholder='informe seu email'
                    />
                    )}
                  />
            {errors.email && <div className="error">{errors.email.message}</div>}
                </div>
                <div className='inputContainer'>
                    <label htmlFor='password'></label>
                    <Controller
                    name="senha"
                    control={control}
                    render={({ field }) => (
                    <input
                    type='password'
                    id='senha'
                    {...field}
                    placeholder='crie uma senha'
                    />
                    )}
                  />
                {errors.senha && <div className="error">{errors.senha.message}</div>}
                </div>
                <div style={{ marginLeft: '130px' }}>
                <Button
                texto="Cadastrar"/>
                </div>
                {aviso && <div className="aviso">{aviso}</div>}
            </form>
    )
}

export default Form;