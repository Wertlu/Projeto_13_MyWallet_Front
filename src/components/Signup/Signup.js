import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Logo, Container, Input, Button, Login } from "./SignupStyle";

export default function Signup() {
  const [Loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPass, setnewPass] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function Signingup(event) {
    setLoading(true);
    event.preventDefault();

    if (password === newPass) {
      const promise = axios.post("http://localhost:5000/users", {
        email,
        password,
        name,
      });

      promise.then(() => navigate("/"));

      promise.catch(() => {
        alert("Algo deu errado, tente novamente");
        setLoading(false);
      });
    } else {
      alert("As senhas não coincidem");
      setLoading(false);
    }
  }

  return (
    <Container>
      <Logo>MyWallet</Logo>
      <form onSubmit={Signingup}>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder=" Nome"
          disabled={Loading}
        ></Input>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder=" E-mail"
          disabled={Loading}
        ></Input>
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder=" Senha"
          disabled={Loading}
        ></Input>
        <Input
          type="password"
          onChange={(e) => setnewPass(e.target.value)}
          value={newPass}
          placeholder=" Confirme a senha"
          disabled={Loading}
        ></Input>
        <Button type="submit" disabled={Loading}>
          Cadastrar
        </Button>
        <Login to="/">Já tem uma conta? Entre agora!</Login>
      </form>
    </Container>
  );
}
