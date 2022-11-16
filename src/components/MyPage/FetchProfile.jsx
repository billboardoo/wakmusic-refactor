import React, { useContext } from "react";
import { userInfoContext } from "../../Context/UserInfoContext";
import ProfileSetting from "../../images/ProfileSetting.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const FetchProfile = ({ platformText }) => {
  const navigate = useNavigate();
  const profileURL = `/static/profile/${userInfo.profile}.png`;
  const { userInfo } = useContext(userInfoContext);

  const onClickProfileSelect = () => {
    navigate("/profile");
  };

  const onClickLogout = () => {
    window.location.href = "/logout";
    localStorage.removeItem("playlistKey");
  };

  return (
    <S.ProfileBox>
      <S.ProfileSettingIcon
        onClick={onClickProfileSelect}
        src={ProfileSetting}
      />
      <S.ProfileImg src={profileURL} />
      <S.ProfileName>{userInfo.name}</S.ProfileName>
      <S.LoginPlatform>{platformText}</S.LoginPlatform>
      <S.LogoutButton onClick={onClickLogout}>로그아웃</S.LogoutButton>
    </S.ProfileBox>
  );
};

export default FetchProfile;
