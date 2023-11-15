import Button from "../Button";
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './formLog.css'
import { useNavigate } from 'react-router-dom';

interface Usuario {
    email: string;
    senha: string;
}

const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email não registrado'),
    senha: yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres').required('Senha incorreta'),
  });

function FormLogin() {
    const { control, handleSubmit, formState: { errors } } = useForm<Usuario>({
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: Usuario) => {
        console.log(data);
      };

      const navigate = useNavigate();

      const handleEntrarClick = () => {
        navigate('/marcacao');
      };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputContainer'>
                  <h2>LOGIN</h2>
                    <label htmlFor='email'></label>
                    <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                    <input
                    type='email'
                    id='email'
                    {...field}
                    placeholder='informe seu email cadastrado'
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
                    placeholder='Digite sua senha'
                    />
                    )}
                  />
                {errors.senha && <div className="error">{errors.senha.message}</div>}
                </div>
                <div style={{ marginLeft: '80px' }}>
                <Button
                texto="Entrar"
                onClick={handleEntrarClick}/>
                </div>
            </form>
    )
}

export default FormLogin;