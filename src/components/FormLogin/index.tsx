import Button from "../Button";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { API } from "../../config";

interface Usuario {
  email: string;
  senha: string;
  nome: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Campo obrigatório!!!").required("Email não registrado"),
  senha: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Senha incorreta"),
});

function FormLogin() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Usuario>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (user: Usuario) => {
    let data = {
      username: user.email,
      password: user.senha,
    };

    try {
      let response = await API.post("/login", data);

      navigate("/homeoficial");
    } catch (error:any) {
      alert("Email ou senha inválidos")
    }
  };

  const navigate = useNavigate();

  const handleEntrarClick = () => {
    // navigate('/homeoficial');
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
          name="senha"
          control={control}
          render={({ field }) => (
            <input
              type="password"
              id="senha"
              {...field}
              placeholder="Digite sua senha"
            />
          )}
        />
        {errors.senha && <div className="error">{errors.senha.message}</div>}
      </div>
      <div style={{ marginLeft: "80px" }}>
        <Button texto="Entrar" onClick={handleEntrarClick} />
      </div>
    </form>
  );
}

export default FormLogin;
