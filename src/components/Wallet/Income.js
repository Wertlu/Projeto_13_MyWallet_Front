import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDeposit } from "../../services/mywallet";
import { Header, Container, Button, Input  } from "./IncomeStyle";
import Loading from "../../Loading";

export default function Income() {
  const [addValue, setAddValue] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleDeposit(e) {
    setIsLoading(true);
    e.preventDefault();
    const promise = addDeposit({ addValue, description });
    promise.then((response) => {
      navigate("/home");
    });
  }

  return (
    <>
      <Header>
        <div className="title">
          <h1>Nova entrada</h1>
        </div>
      </Header>
      <Container>
        <form onSubmit={handleDeposit}>
          <Input
            disabled={isLoading}
            type="number"
            pattern="(?:\.|,|[0-9])*"
            onChange={(e) => setAddValue(e.target.value)}
            value={addValue}
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
            {isLoading ? <Loading /> : "Salvar entrada"}
          </Button>
        </form>
      </Container>
    </>
  );
}