import React from "react";
import axios from "axios";
import { userState } from "../../atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export interface PropsType {
  link: string;
  item: string;
}

const SetProfile = (props: PropsType) => {
  const { link, item } = props;
  const [userInfo, serUserInfo] = useRecoilState(userState);
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
