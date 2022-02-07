import {Footer, Header, List, Icon} from "./WalletStyle.js";
import { BiLogOut, BiPlusCircle, BiMinusCircle } from "react-icons/bi";

export default function Wallet() {

  return (
    <>
      <Header>
        <h2>Olá, Fulano</h2><BiLogOut style={Icon}/>
      </Header>
      <List>
        <p>Não há registros de entrada ou saída</p>
      </List>
      <Footer>
        <button>
          <BiPlusCircle style={Icon}/>
          <h3>Nova entrada</h3>
        </button>
        <button>
          <BiMinusCircle style={Icon}/>
          <h3>Nova saída</h3>
        </button>
      </Footer>
    </>
  );
}