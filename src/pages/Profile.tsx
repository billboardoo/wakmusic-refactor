import React, { useContext } from "react";
import {
  userInfoContext,
  setUserInfoContext,
} from "../atoms";
import { profileKinds } from "../components/Profile/constant";
import PageIntroduce from "../components/PageIntroduce";
import SetProfile from "../components/Profile/SetProfile";
import * as S from "../components/Profile/styled";
import Footer from "../components/Footer";

const Profile = () => {
  const userInfo = useContext(userInfoContext);
  const userInfoDispatch = useContext(setUserInfoContext);

  return (
    <S.MainLayout>
      <PageIntroduce title="프로필을 선택하세요." />
      <S.ProfileLayout>
        {profileKinds.map((item, index) => {
          const link = `https://wakmusic.xyz/static/profile/${item}.png`;
          return (
            <SetProfile
              userInfo={userInfo}
              link={link}
              item={item}
              key={index}
            />
          );
        })}
      </S.ProfileLayout>
      <Footer />
    </S.MainLayout>
  );
};

export default Profile;
