import styled from "styled-components";

import { Link } from "react-router-dom";

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
`;

const Icon = styled.div`
  color: #ffffff;
  font-size: 20px;
  line-height: 22px;
  font-weight: bold;
`;

const StyledLink1 = styled(Link)`
  background-color: #a328d6;
  border-radius: 5px;
  width: 156px;
  height: 114px;
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
`;

function Money({ money }) {
  const { value, description, type, date } = money;
  return (
    <Container>
      <LeftSide>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </LeftSide>
      <RightSide>
        <Value type={type}>{value}</Value>
      </RightSide>
    </Container>
  );
}

const LeftSide = styled.div`
  display: flex;
  gap: 10px;
`;
const Date = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #c6c6c6;
`;

const Description = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const RightSide = styled.div`
  display: flex;
  gap: 10px;
`;

const Value = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.type === "deposit" ? "green" : "red")};
`;

const Container = styled.div`
  min-height: 100vh;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const Statement = styled.div`
  width: 326px;
  height: 446px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  .center {
    width: 180px;
    height: 50px;
    display: flex;
    align-items: center;
  }
  span {
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;

const Header = styled.div`
  height: 6vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  z-index: 320;
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  h1 {
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
  }
`;
const StyledLink2 = styled(Link)`
  color: #ffffff;
  font-size: 28px;
  line-height: 22px;
  font-weight: bold;
`;

export { Container, Statement, Footer, Icon, StyledLink1, StyledLink2, Header, Money };