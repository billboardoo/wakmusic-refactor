import React from "react";
import styled from "styled-components";
import textLogo from "../assets/imgs/Logo/logo-text.png";

function Footer() {
  return (
    <_Container>
      <img src={textLogo} alt="logo" />
      <FooterText>
        WAKTAVERSE Music · 인천광역시 송도 왁엔터로 7-24길(왁엔터테인먼트 사옥
        19층 왁타버스뮤직 웹사이트 개발부서) · 대표이사 우왁굳
      </FooterText>
    </_Container>
  );
}

const _Container = styled.div`
  width: 100vw;
  height: 310px;
  background: #080f34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  transform: translateY(0%);

  img {
    width: 110px;
  }
`;

const FooterText = styled.p`
  color: #6b6f85;
  font-size: 14px;
  text-align: center;
`;

export default Footer;
