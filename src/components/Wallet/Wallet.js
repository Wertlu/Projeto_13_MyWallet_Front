import { BiLogOut, BiPlusCircle, BiMinusCircle,  } from "react-icons/bi";

import { Container, Statement, Footer, Icon, StyledLink1, StyledLink2, Header } from "./WalletStyle";


export default function Wallet() {

  return (
    <>
      <Container>
      <Header>
        <h1>Olá, fulano</h1>
        <StyledLink2 to="/">
          <BiLogOut />
        </StyledLink2>
      </Header>
        <Statement>
          <div className="center">
            <span>Não há registros de entrada ou saída</span>
          </div>
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