import { Link } from "react-router-dom";
import styled from "styled-components";

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

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-decoration: none;
`;

const Button = styled.button`
  height: 45px;
  width: 100%;
  border: none;
  background: #a328d6;
  color: #ffffff;
  font-weight: bold;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 5px;
  &:disabled {
    display: flex;
    justify-content: center;
    background-color: #c46fe9;
  }
`;

const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #d5d5d5;
  background-color: #ffffff;
  color: #222222;
  font-family: "Lexend Deca", sans-serif;
  font-size: 19.976px;
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 5px;
  &::placeholder {
    color: #dbdbdb;
    font-family: "Lexend Deca", sans-serif;
  }
  &:disabled {
    background: #f2f2f2;
  }
`;
export { Container, StyledLink, Button, Input };