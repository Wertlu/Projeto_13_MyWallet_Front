import { BiLogOut, BiPlusCircle, BiMinusCircle,  } from "react-icons/bi";
import { Container, Statement, Footer, Icon, StyledLink1,Total, StyledLink2, Header, Money } from "./WalletStyle";
import UserContext from "./context/UserContext.js";
import { React, useContext, useState, useEffect, } from "react";
import { getTransaction } from "../../services/mywallet";

export default function Wallet() {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState([]);
  const [userTotal, setUserTotal] = useState(0);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  useEffect(() => {
    renderHomePage();
  }, []);

  useEffect(mathTotal, [formData]);

  function renderHomePage() {
    const promise = getTransaction(config);
    promise.then((response) => {
      setFormData(response.data);
    });
  }
  function mathTotal() {
    let totalDeposit = 0;
    let totalWithdraw = 0;

    for (let i = 0; i < formData.length; i++) {
      if (formData[i].type === "deposit") {
        const depositValue = formData[i].value;
        totalDeposit += parseFloat(depositValue);
      } else {
        const withdrawValue = formData[i].value;
        totalWithdraw += parseFloat(withdrawValue);
      }
      setUserTotal((totalDeposit - totalWithdraw).toFixed(2));
    }
  }

  return (
    <>
      <Container>
      <Header>
        <h1>Olá, {user.name}</h1>
        <StyledLink2 to="/">
          <BiLogOut />
        </StyledLink2>
      </Header>
      <Statement>
          {formData.length === 0 ? (
            <div className="center">
              <span>Não há registros de entrada ou saída</span>
            </div>
          ) : (
            formData.map((r, i) => <Money money={r} key={i} />)
          )}
          <Total>
            <p>Saldo</p>{" "}
            <span className={userTotal >= 0 ? "green" : "red"}>
              {userTotal}
            </span>
          </Total>
        </Statement>
        <Footer>
        <StyledLink1 to="/deposit">
          <Icon>
            <BiPlusCircle />
          </Icon>
          Nova entrada
        </StyledLink1>

        <StyledLink1 to="/withdraw">
          <Icon>
            <BiMinusCircle />
          </Icon>
          Nova saída
        </StyledLink1>
      </Footer>
      </Container>
    </>
  );
}