import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { userInfoType, userInfoStateType } from "../../types";
import { userInfoContext } from "../../Context/userInfo";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { NavList } from "./NavList";
import logo from "../../assets/imgs/Logo/DefaultLogo.png";
import HeaderCircle from "../../assets/svgs/Etc/HeaderCircle.svg";
import HeaderProfileEtc from "../../assets/svgs/Etc/HeaderProfileEtc.svg";
import axios from "axios";
import LoginModal from "../Login/LoginModal";

const getUserInfo = () => {
  return axios.get("/api/auth");
};

function Header() {
  const location = useLocation();
  const { data: userData } = useQuery(["userData"], getUserInfo, {
    enabled: location.pathname == "mypage",
    onError: (error: Error) => {
      alert("로그인에 실패했습니다.");
    },
  });
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  const [selectMenu, setSelectMenu] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    console.log(userInfo);
    const pathName: string = location.pathname;
    setSelectMenu(pathName);
  });

  // if (isError == false) {
  //   setUserInfo({
  //     name: data?.displayName
  //       ? data?.displayName
  //       : "애플" + data.sub.split(".")[2],
  //     id: data?.id ? data?.id : data?.sub,
  //     platform: data?.provider ? data?.provider : "apple",
  //     profile: data?.profile,
  //     first: data?.first,
  //   });
  // }

  const sendModal = () => {
    setModal(!modal);
  };

  // const enableMenu = () => {
  //   const menuBtn = document.getElementById("nav-bar-mobile");
  //   setMenu(!menu);
  //   if (menu) {
  //     menuBtn.className = "nav-bar-disabled";
  //     setTimeout(() => {
  //       menuBtn.style.display = "none";
  //     }, 200);
  //   } else {
  //     menuBtn.className = "nav-bar-enabled";
  //     menuBtn.style.display = "block";
  //   }
  // };

  return (
    <>
      {modal ? <LoginModal sendModal={sendModal} /> : <></>}
      <_HeaderWrap>
        <_Header>
          <Link to="/" className="logo">
            <img src={logo} alt="WAKTAVERSE MUSIC" />
          </Link>
          <_NavLayout>
            {NavList.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  style={{ textDecoration: "none" }}
                  key={index}
                >
                  <_NavBox current={selectMenu == item.path}>
                    <_NavCircle src={HeaderCircle} />
                    <_NavButton name={`${index}`}>{item.value}</_NavButton>
                  </_NavBox>
                </Link>
              );
            })}
          </_NavLayout>
          <_BarRight>
            <Link to="/support" style={{ textDecoration: "none" }}>
              <_NavBox current={selectMenu == "/support"}>
                <_NavCircle src={HeaderCircle} />
                <_NavButton>SUPPROT</_NavButton>
              </_NavBox>
            </Link>
            <_LoginLine />
            {!userInfo ? (
              <_ProfileArea>
                <_ProfileImg
                  src={`https://wakmusic.xyz/static/profile/jupock.png`}
                  alt="ProfileImg"
                />
                <p>김벽걸</p>
                <_ProfileMenuBox>
                  <img src={HeaderProfileEtc} alt="프로필 사진" />
                  <_ProfileContentBox>
                    <_ProfileContent href="/mypage">MYPAGE</_ProfileContent>
                    <_ProfileContent href="/logout">LOGOUT</_ProfileContent>
                  </_ProfileContentBox>
                </_ProfileMenuBox>
              </_ProfileArea>
            ) : (
              <_NavBox current={false} onClick={sendModal}>
                <_NavCircle src={HeaderCircle} />
                <_NavButton>LOGIN</_NavButton>
              </_NavBox>
            )}
          </_BarRight>
        </_Header>
        {/* <div id="burger-btn" onClick={() => enableMenu()}>
          <div />
          <div />
          <div />
        </div>
        <div id="nav-bar-mobile" className="nav-bar-enabled">
          <div id="logo-wrap">
            <Link to="/" className="logo-mobile" onClick={() => enableMenu()}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-item-wrap">
            {!userInfo ? (
              <div
                className="nav-item"
                onClick={() => {
                  sendModal();
                  enableMenu();
                }}
              >
                로그인하기
              </div>
            ) : (
              <>
                <div id="mobile-profile-area">
                  <_ProfileImg
                    src={`https://wakmusic.xyz/static/profile/jupock.png`}
                    alt=""
                  />
                  <div className="profile-name">UNKNOWN</div>
                </div>
                <Link
                  to="/mypage"
                  style={{ fontSize: "15px", textDecoration: "none" }}
                >
                  <_NavBox current={false}>
                    <_NavCircle src={HeaderCircle} />
                    <_NavButton>SUPPROT</_NavButton>
                  </_NavBox>
                </Link>
                <a
                  href="/logout"
                  className="nav-item"
                  style={{ fontSize: "15px" }}
                >
                  LOGOUT
                </a>
              </>
            )}
            <hr className="login-div" />
            <Link
              to="/charts"
              className="nav-item"
              id="charts"
              onClick={() => enableMenu()}
            >
              CHARTS
            </Link>
            <Link
              to="/albums"
              className="nav-item"
              id="albums"
              onClick={() => enableMenu()}
            >
              ALBUMS
            </Link>
            <Link
              to="/artists"
              className="nav-item"
              id="artists"
              onClick={() => enableMenu()}
            >
              ARTISTS
            </Link>
            <Link
              to="/news"
              className="nav-item"
              id="news"
              onClick={() => enableMenu()}
            >
              NEWS
            </Link>
            <Link
              to="/teams"
              className="nav-item"
              id="teams"
              onClick={() => enableMenu()}
            >
              TEAMS
            </Link>
            <Link
              to="/support"
              className="nav-item"
              id="support"
              onClick={() => enableMenu()}
            >
              SUPPORT
            </Link>
          </div>
        </div> */}
      </_HeaderWrap>
    </>
  );
}

const _HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #080f34;
  width: 100vw;
  height: 80px;
  overflow-y: visible;
`;

const _Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 65vw;
  height: 80px;
  overflow-y: visible;
`;

const _BarRight = styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  gap: 15px;

  p {
    margin: 0px;
    color: white;
    font-size: 18px;
    font-weight: 500;
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const _ProfileMenuBox = styled.div`
  position: absolute;
  top: 0px;
  padding-top: 40px;
  right: 28px;
  width: 90px;
  display: none;
  flex-direction: column;
  background: none;
  align-items: center;

  &:hover {
    display: flex;
  }
`;

const _ProfileContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  min-height: 20px;
  margin-top: -1px;
  background: #e3e5eb;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

const _ProfileContent = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  background: #e3e5eb;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #080f34;
  text-decoration: none;

  &:hover {
    color: #646d9c;
  }
`;

const _ProfileImg = styled.img`
  height: 32px;
  border-radius: 100px;
`;

const _NavLayout = styled.div`
  display: flex;
  gap: 40px;
  margin-left: 40px;
`;

interface NavBoxProps {
  current: boolean;
}

const _ProfileArea = styled.div`
  z-index: 1;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    div {
      display: flex;
    }
  }
`;

const _NavBox = styled.div<NavBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    opacity: ${(props) => (props.current ? 1 : 0)};
  }

  button {
    color: ${(props) => (props.current ? "#00f3f3" : "#ffffff")};
  }

  &:hover {
    img {
      opacity: 1;
    }
    button {
      color: #00f3f3;
    }
  }
`;

const _NavCircle = styled.img`
  transition: all 0.2s;
  position: absolute;
  top: -10px;
  opacity: 0;
`;

const _LoginLine = styled.div`
  width: 1px;
  height: 16px;
  border-radius: 10px;
  background-color: #6b6f85;
`;

const _NavButton = styled.button`
  transition: color 0.2s;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  transition: color 0.2s;
  background: none;
  border: none;
  margin: 0px;
  text-decoration: none;
  padding: 0px;
  cursor: pointer;
`;

export default Header;
