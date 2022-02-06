// import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
font-family: 'Saira Stencil One', cursive;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
width: 60px;
height: 23px;
left: 40px;
top: 251px;

font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;

color: #000000;

width: 326px;
height: 58px;
left: 25px;
top: 233px;

background: #FFFFFF;
border-radius: 5px;
border: none;
`;

const Button = styled.button`
width: 59px;
height: 23px;
left: 158px;
top: 386px;

font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #FFFFFF;

width: 326px;
height: 46px;
left: 23px;
top: 375px;

background: #A328D6;
border-radius: 5px;
border: none;
`;

const SignUp = styled.span`
font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
`;

export { Logo, Container, Input, Button, SignUp };