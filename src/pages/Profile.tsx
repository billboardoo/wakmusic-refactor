import React, { useContext } from "react";
import { profileKinds } from "../components/Profile/constant";
import PageIntroduce from "../components/PageIntroduce";
import SetProfile from "../components/Profile/SetProfile";
import * as S from "../components/Profile/styled";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <S.MainLayout>
      <PageIntroduce title="프로필을 선택하세요." />
      <div>
        {profileKinds.map((item, index) => {
          const link = `https://wakmusic.xyz/static/profile/${item}.png`;
          return <SetProfile link={link} item={item} key={index} />;
        })}
      </div>
      <Footer />
    </S.MainLayout>
  );
};

export default Profile;
