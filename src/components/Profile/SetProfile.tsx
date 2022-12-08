import React from "react";
import axios from "axios";
import { userInfoType } from "../../types/index";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export interface PropsType {
  link: string;
  item: string;
  userInfo: userInfoType;
}

const SetProfile = (props: PropsType) => {
  const { link, item, userInfo } = props;
  const navigate = useNavigate();

  const setUserProfile = () => {
    axios
      .post("/api/profile/set", {
        clientId: userInfo.id,
        image: item,
      })
      .then(() => {
        navigate("/mypage", { state: { first: false } });
      });
  };

  return <S.ProfileThings onClick={setUserProfile} src={link} key={item} />;
};

export default SetProfile;
