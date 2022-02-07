import React, { useState } from "react";
import { signUp } from "../../services/mywallet";
import { Container, StyledLink, Button, Input } from "./SignupStyle";
import { useNavigate } from "react-router-dom";

import Loading from "../../Loading";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    setIsLoading(true);
    const promise = signUp({ name, email, password });
    if (password !== confirmPassword) {
      alert("As senhas não conferem. Tente de novo");
      setIsLoading(false);
    } else {
      promise.then(() => navigate("/"));
      setIsLoading(true);
    }
    promise.catch(() => {
alert("Confira os dados e tente de novo");
      setIsLoading(false);
    });
  }

  return (
    <Container>
      <form onSubmit={handleSignUp}>
        <Input
          disabled={isLoading}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Nome"
        />
        <Input
          disabled={isLoading}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="E-mail"
        />
        <Input
          disabled={isLoading}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Senha"
        />

        <Input
          disabled={isLoading}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="password"
          placeholder="Confirme sua senha"
        />
        <Button disabled={isLoading} type="submit">
          {isLoading ? <Loading /> : "Cadastrar"}
        </Button>
      </form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  );
}