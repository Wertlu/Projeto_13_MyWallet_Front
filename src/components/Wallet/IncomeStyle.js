import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  z-index: 320;
  .title {
    min-height: 3vh;
    margin-left: 30px;
    margin-top: 30px;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
`;
const Container = styled.div`
  min-height: 80vh;
  min-width: 30vh;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  form {
    margin-top: 2vh;
  }
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
export { Header, Container, Button, Input };