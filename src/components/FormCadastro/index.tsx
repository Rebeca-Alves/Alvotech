import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import * as yup from 'yup';
import { useForm, Controller, } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './formCad.css';
import { API } from '../../api';
interface Usuario {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Este campo é obrigatório'),
  email: yup.string().email('Email inválido').required('Este campo é obrigatório'),
  password: yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres').required('Este campo é obrigatório'),
});

function Form() {
  const [aviso] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm<Usuario>({
    resolver: yupResolver(schema),
  });
  
  const navigate = useNavigate();

  const onSubmit = async (user: Usuario) => {
    try {
      const response = await API.post('/cadastro', {
          name: user.name,
          email: user.email,
          password: user.password,
      });

      if (response.status === 200) {
        alert('Cadastro realizado com sucesso!');
        navigate('/homeoficial');
      } else {
        alert('Erro ao cadastrar');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='inputContainer'>
        <h2>CADASTRO</h2>
        <label htmlFor='nome'></label>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <input
              type='text'
              id='nome'
              {...field}
              placeholder='Informe seu nome'
            />
          )}
        />
        {errors.name && <div className='error'>{errors.name.message}</div>}
      </div>
      <div className='inputContainer'>
        <label htmlFor='email'></label>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <input
              type='email'
              id='email'
              {...field}
              placeholder='Informe seu email'
            />
          )}
        />
        {errors.email && <div className='error'>{errors.email.message}</div>}
      </div>
      <div className='inputContainer'>
        <label htmlFor='senha'></label>
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <input
              type='password'
              id='senha'
              {...field}
              placeholder='Crie uma senha'
            />
          )}
        />
        {errors.password && <div className='error'>{errors.password.message}</div>}
      </div>
      <div style={{ marginLeft: '130px' }}>
        <Button texto="Cadastrar" />
      </div>
      {aviso && <div className='aviso'>{aviso}</div>}
    </form>
  );
  };
  
  export default Form;
  

