import Button from "../Button";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { API } from '../../api';
interface Usuario {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email não registrado'),
  password: yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres').required('Senha incorreta'),
});

function FormLogin() {
  const { control, handleSubmit, formState: { errors } } = useForm<Usuario>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (user: Usuario) => {
    try {
      const response = await API.post('/login', {
        email: user.email,
        password: user.password,
      });

      if (response.status === 200) {
          navigate("/homeoficial");
      } else if (response.status === 401){
        alert('Email ou senha inválidos');
      } else{
        alert('Erro ao fazer login');
      }
    } catch (error) {
      console.error(error);
      alert("Email ou senha inválidos");
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputContainer">
        <h2>LOGIN</h2>
        <label htmlFor="email"></label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              id="email"
              {...field}
              placeholder="Nome do usuário"
            />
          )}
        />
        {errors.email && <div className="error">{errors.email.message}</div>}
      </div>
      <div className="inputContainer">
        <label htmlFor="password"></label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input
              type="password"
              id="password"
              {...field}
              placeholder="Digite sua senha"
            />
          )}
        />
        {errors.password && <div className="error">{errors.password.message}</div>}
      </div>
      <div style={{ marginLeft: "80px" }}>
        <Button texto="Entrar" type="submit" />
      </div>
    </form>
  );
}

export default FormLogin;
