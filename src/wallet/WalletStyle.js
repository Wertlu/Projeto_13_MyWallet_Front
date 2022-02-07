import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 22px;
  margin-top: 25px;
  h2 {
    height: 31px;
    width: 141px;
    left: 24px;
    top: 25px;
    border-radius: nullpx;
    font-family: Raleway;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;

const List = styled.div`
  height: 446px;
  width: 90%;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  p {
    height: 46px;
    width: 180px;
    left: 98px;
    top: 278px;
    border-radius: nullpx;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #868686;
  }
`;

const Footer = styled.div`
  display: flex;
  margin-top: 29px;
  justify-content: center;
  width: 90%;
  align-items: center;
  gap: 15px;
  button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: none;
    height: 114px;
    width: 155px;
    left: 25px;
    top: 537px;
    border-radius: 5px;
    background: #a328d6;
  }
  h3 {
    text-decoration: none;
    font-family: Raleway;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    height: 40px;
    width: 64px;
    left: 35px;
    top: 602px;
    border-radius: nullpx;
    color: #ffffff;
    margin-left: 9px;
    margin-bottom: 10px;
  }
`;

const Icon = {
  height: "24px",
  width: "23px",
  left: "328px",
  top: "28px",
  border: "none"
}

export { Footer, Header, List, Icon };