import React, { useRef, useEffect } from "react";
import { loginTypeInfo } from "./LoginTypeInfo";
import LoginBox from "./LoginBox";
import * as S from "./styled";

const LoginModal = (props: any) => {
  const { sendModal } = props;
  const backgroundRef = useRef<HTMLDivElement>();

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget == backgroundRef.current) {
      sendModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = `hidden`;
    document.body.style.height = "100vh";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <S.Container onClick={closeModal} ref={backgroundRef}>
      <S.ModalBox>
        <S.Title>로그인</S.Title>
        <S.SubTitle>계정 로그인 방법을 선택해 주세요.</S.SubTitle>
        <S.LoginBoxLayout>
          {loginTypeInfo.map((item, index) => {
            return (
              <LoginBox name={item.name} key={index}>
                <S.PlatformIcon src={item.image} />
                <S.LoginBoxText>{item.text}로 로그인하기</S.LoginBoxText>
              </LoginBox>
            );
          })}
        </S.LoginBoxLayout>
      </S.ModalBox>
    </S.Container>
  );
};

export default LoginModal;
