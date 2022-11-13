import React from "react";
import * as S from "./styled";

interface propsType {
  name: string;
  children: React.ReactNode;
}

const LoginBox = ({ name, children }: propsType) => {
  const onClickLogin = () => {
    if (name) {
      window.location.href = `/auth/login/${name}`;
    }
  };

  return <S.LoginBox onClick={onClickLogin}>{children}</S.LoginBox>;
};

export default LoginBox;
