import { React, useState, useContext } from "react";
import { Container, StyledLink, Button, Input } from "./LoginStyle";
import { useNavigate } from "react-router-dom";

import UserContext from "../../context/UserContext";
import Loading from "../../Loading";
import { login } from "../../services/mywallet";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogin(e) {
    setIsLoading(true);
    e.preventDefault();
    const promise = login({ email, password });

    promise.then((response) => {
      setToken(response.data.token);
      navigate("/home");
    });

    promise.catch(() => {
      alert("Confira seus dados e tente novamente");
      setIsLoading(false);
    });
  }

  return (
    <Container>
      <span>MyWallet</span>
      <form onSubmit={handleLogin}>
        <Input
          disabled={isLoading}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="E-mail"
        ></Input>
        <Input
          disabled={isLoading}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Senha"
        ></Input>

        <Button disabled={isLoading} type="submit">
          {isLoading ? <Loading /> : "Entrar"}
        </Button>
      </form>
      <StyledLink to="/sign-up">Não possui conta? Cadastre-se</StyledLink>
    </Container>
  );
}