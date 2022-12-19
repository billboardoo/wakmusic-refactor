import React from "react";
import postProfile from "../../apis/profile";
import { userState } from "../../atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

interface PropsType {
  profileImgLink: string;
  item: string;
}

const SetProfile = (props: PropsType) => {
  const { profileImgLink, item } = props;
  const [userInfo, serUserInfo] = useRecoilState(userState);
  const navigate = useNavigate();

  const setUserProfile = () => {
    postProfile({
      clientId: userInfo.id,
      image: item,
    }).then(() => {
      navigate("/mypage", { state: { first: false } });
    });
  };

  return (
    <S.ProfileThings onClick={setUserProfile} src={profileImgLink} key={item} />
  );
};

export default SetProfile;
