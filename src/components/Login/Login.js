import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Logo, Container, Input, Button, SignUp } from "./LoginStyle";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function logining(event) {
        setLoading(true);

        event.preventDefault();
        const promise = axios.post("http://localhost:5000/users", {
            email: email,
            password: password,
        });

        promise.then((r) => {
            navigate("/principal");
        });
        promise.catch((e) => {
            alert("E-mail ou senha não correspondem, tente novamente.");
            setLoading(false);
        });
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <form onSubmit={logining}>
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
                <Button type="submit" disabled={Loading}>
                    Entrar
                </Button>
                <SignUp to="/cadastro">Primeira vez? Cadastre-se!</SignUp>
            </form>
        </Container>
    );
}