import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addWithdraw } from "../../services/mywallet";
import Loading from "../../Loading";
import { Header, Container, Button, Input } from "./OutcomeStyle";

export default function Outcome() {
  const [removeValue, setRemoveValue] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleWithdraw(e) {
    setIsLoading(true);
    e.preventDefault();
    const promise = addWithdraw({ removeValue, description });
    promise.then((response) => {
      navigate("/home");
    });
  }

  return (
    <>
      <Header>
        <div className="title">
          <h1>Nova saída</h1>
        </div>
      </Header>
      <Container>
        <form onSubmit={handleWithdraw}>
          <Input
            disabled={isLoading}
            type="number"
            pattern="(?:\.|,|[0-9])*"
            onChange={(e) => setRemoveValue(e.target.value)}
            value={removeValue}
            placeholder="Valor"
          ></Input>
          <Input
            disabled={isLoading}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Descrição"
          ></Input>

          <Button disabled={isLoading} type="submit">
            {isLoading ? <Loading /> : "Salvar saída"}
          </Button>
        </form>
      </Container>
    </>
  );
}