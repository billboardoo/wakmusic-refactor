import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { userInfoContext } from "../Context/userInfo";
import { userInfoStateType } from "../types";
import PageIntroduce from "../components/PageIntroduce";
import FetchProfile from "../components/MyPage/FetchProfile";
import PlaylistSection from "../components/MyPage/PlaylistSection";
import Modal from "../components/Modal/Modal";
import * as S from "../components/MyPage/styled";
import Footer from "../components/Footer";
import { Ellipse } from "../components/Utils";

interface addPlaylistType {
  name: string;
  text: string;
}

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  const [alertText, setAlert] = useState<string>("");
  const [platformText, setPlatformText] = useState<string>("");
  const [addPlaylist, setAddPlaylist] = useState<addPlaylistType>({
    name: "",
    text: "",
  });
  const [plusModalBool, setPlusModalBool] = useState<boolean>(false);
  const [deleteModalBool, setDeleteModalBool] = useState<boolean>(false);
  const [playlistBundle, setPlaylistBundle] = useState([]);

  // {key, title, creator, platform, image}

  useEffect(() => {
    axios.get("/api/auth").then((res) => {
      let data = res.data;
      if (data.status === 401) {
        navigate("/");
      }

      let id = data.id ? data.id : data.sub;
      let platform = data.provider ? data.provider : "apple";

      setUserInfo({
        name: data.displayName
          ? data.displayName
          : "애플" + data.sub.split(".")[2],
        id: id,
        platform: platform,
        profile: data.profile,
        first: data.first,
      });

      localStorage.setItem("clientId", id);
      getPlaylist(id);
      platformSelect(platform);
      if (
        data.first &&
        location.state?.first === undefined &&
        data.profile === "default"
      ) {
        navigate("/profile");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //플레이 리스트 목록 가져오기
  const getPlaylist = (userId: string) => {
    axios
      .get(`/api/playlist/list/${userId}`)
      .then((res) => {
        setPlaylistBundle(res.data.playlist);
      })
      .catch((res) => {
        sendAlert("오류가 발생하였습니다.");
      });
  };

  //플레이 리스트 삭제 함수
  const deletePlayList = () => {
    let sel = playlistBundle.find(
      (i) => i.key === localStorage.getItem("playlistKey")
    );
    if (sel.clientId === userInfo.id) {
      axios
        .post(`/api/playlist/delete/${localStorage.getItem("playlistKey")}`, {
          clientId: userInfo.id,
        })
        .then((res) => {
          sendAlert("재생목록이 삭제되었습니다.");
          setTimeout(() => window.location.reload(), 500);
        });
    } else {
      axios
        .post(`/api/playlist/remove/${localStorage.getItem("playlistKey")}`, {
          clientId: userInfo.id,
        })
        .then((res) => {
          sendAlert("재생목록이 삭제되었습니다.111");
          setTimeout(() => window.location.reload(), 500);
        });
    }
  };

  //추가할 플레이리스트 이름 설정 함수
  const onChangePlaylistName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 12) {
      setAddPlaylist({ ...addPlaylist, text: "12자 이내로 입력해 주세요." });
    } else if (value === "158") {
      setAddPlaylist({
        name: value,
        text: "제목이 너무 짧습니다.",
      });
    } else if (value === "159") {
      setAddPlaylist({
        name: value,
        text: "이제 적당하군요",
      });
    } else {
      setAddPlaylist({
        name: value,
        text: "",
      });
    }
  };

  //플레이리스트 추가 요청 API
  const postAppendPlaylist = () => {
    if (addPlaylist.name.trim()) {
      axios
        .post("/api/playlist/create", {
          title: addPlaylist.name,
          creator: userInfo.name,
          platform: userInfo.platform,
          image: Math.floor(Math.random() * 11) + 1,
          songlist: [],
          public: "false", //true, false
          clientId: userInfo.id,
        })
        .catch(() => {
          setAddPlaylist({
            ...addPlaylist,
            text: "재생목록을 생성할 수 없습니다.",
          });
        })
        .then((res) => {
          setPlusModalBool(false);
          setAddPlaylist({
            name: "",
            text: "",
          });
          window.location.reload();
        });
    } else {
      setAddPlaylist({
        name: "",
        text: "재생목록의 이름을 입력해 주세요.",
      });
    }
  };

  //유저 로그인 플랫폼 표시 글 세팅 함수
  const platformSelect = (platform: string) => {
    switch (platform) {
      case "google":
        setPlatformText("구글로 로그인 중");
        break;
      case "naver":
        setPlatformText("네이버로 로그인 중");
        break;
      case "apple":
        setPlatformText("애플로 로그인 중");
        break;
      default:
        break;
    }
  };

  const sendAlert = (text) => {
    setAlert(text);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  if (!userInfo) return <></>;

  return (
    <>
      <S.Container>
        {alertText !== "" && (
          <div className="alert-wrap">
            <div className="alert">{alertText}</div>
          </div>
        )}
        {plusModalBool && (
          <Modal
            leftText="취소"
            leftEvent={() => setPlusModalBool(false)}
            rightText="생성"
            rightEvent={postAppendPlaylist}
          >
            <S.ModalTitle>재생목록 생성</S.ModalTitle>
            <S.IntroduceText>
              생성할 재생목록의 이름을 입력해 주세요.
            </S.IntroduceText>
            <S.NameInput
              onChange={onChangePlaylistName}
              value={addPlaylist.name}
              placeholder="이름을 입력해 주세요."
            />
            {addPlaylist.text !== "" && (
              <div id="text-limit">{addPlaylist.text}</div>
            )}
          </Modal>
        )}

        {deleteModalBool && (
          <Modal
            leftText="취소"
            leftEvent={() => setDeleteModalBool(false)}
            rightText="삭제"
            rightEvent={deletePlayList}
          >
            <S.ModalTextLayout>
              <S.ModalTitle>삭제</S.ModalTitle>
              <S.ModalText>정말 삭제하시겠습니까?</S.ModalText>
            </S.ModalTextLayout>
          </Modal>
        )}
        <PageIntroduce title="내 재생목록" />
        <S.InfoLayout>
          <FetchProfile userInfo={userInfo} platformText={platformText} />
          <PlaylistSection
            setPlusModalBool={setPlusModalBool}
            playlistBundle={playlistBundle}
            setDeleteModalBool={setDeleteModalBool}
          />
        </S.InfoLayout>
        <Ellipse />
      </S.Container>
      <Footer />
    </>
  );
};

export default MyPage;
