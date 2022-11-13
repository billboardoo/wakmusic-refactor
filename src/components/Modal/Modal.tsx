import React, { ReactNode } from "react";
import * as S from "./styled";

interface propsType {
  children: ReactNode;
  leftText: string;
  rightText: string;
  leftEvent: () => {};
  rightEvent: () => {};
}

const Modal = (props: propsType) => {
  const { children, leftText, leftEvent, rightText, rightEvent } = props;

  return (
    <S.ModalBackGroud>
      <S.Container>
        <S.ModalContentBox>{children}</S.ModalContentBox>
        <S.ButtonLayout>
          <S.MainButton
            onClick={leftEvent}
            background="#D1D5DF"
            color="#080F34"
          >
            {leftText}
          </S.MainButton>
          <S.MainButton
            onClick={rightEvent}
            background="#202F61"
            color="#ffffff"
          >
            {rightText}
          </S.MainButton>
        </S.ButtonLayout>
      </S.Container>
    </S.ModalBackGroud>
  );
};

export default Modal;
