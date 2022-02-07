import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addWithdraw } from "../../services/mywallet";
import Loading from "../../Loading";
import { Header, Container, Button, Input } from "./OutcomeStyle";
import UserContext from "../../context/UserContext.js";
import dayjs from "dayjs";

export default function Outcome() {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    value: "",
    description: "",
    type: "withdraw",
    date: dayjs().format("DD/MM"),
  });
  const [isLoading, setIsLoading] = useState(false);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const navigate = useNavigate();

  function userWithdraw(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handleWithdraw(e) {
    setIsLoading(true);
    e.preventDefault();
    const promise = addWithdraw(formData, config);
    promise.then((response) => {
      navigate("/home");
    });
    promise.catch(() => {
      setIsLoading(false);
      alert("Tente novamente");
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
            value="value"
            pattern="(?:\.|,|[0-9])*"
            onChange={userWithdraw}
            placeholder="Valor"
          ></Input>
          <Input
            disabled={isLoading}
            name="description"
            type="text"
            onChange={userWithdraw}
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