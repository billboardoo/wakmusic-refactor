import React from "react";
import PageIntroduce from "../components/PageIntroduce";
import { easterEgg } from "../components/Support/EasterEggList";
import Footer from "../components/Footer";

const Support = () => {
  return (
    <div className="container fadein" id="dark-container">
      <PageIntroduce title="SUPPORT" />
      <div className="support-text">
        버그 제보:{" "}
        <a href="/bug" target="_blank" rel="noreferrer">
          여기를 클릭하세요
        </a>
        <br />
        음악 추가 문의:{" "}
        <a href="/addmusic" rel="noreferrer" target="_blank">
          여기를 클릭하세요
        </a>
        <br />
        <br />
        기타 문의:{" "}
        <a href="mailto:frin0911@naver.com" target="_blank" rel="noreferrer">
          frin0911@naver.com
        </a>
        <br />
        <br />
        <br />본 사이트에 등장하는 모든 내용은 허구이며, 페이지 하단의
        왁엔터로와 왁엔터테인먼트 사옥은 실제로 존재하지 않습니다.
        <br />
        왁타버스 뮤직은 법적 효력을 보유한 상표명이 아닙니다.
        <br />
        왁타버스 뮤직은 본 사이트에서 제공하는 콘텐츠에 대해 저작권을 갖고있지
        않으며, <br />
        본 사이트에 등장하는 모든 저작물에 대한 1차 저작권은 우왁굳(오영택)에게
        귀속됩니다.
        <br />
        <br />
        왁타버스 뮤직은 왁타버스에서 제공하는 공식 콘텐츠가 아닙니다.
        <br />
        <br />
        <br />
        왁타버스 뮤직 팀에 속한 모든 팀원들은 <b>부아내비</b>(
        <i>부려먹는 게 아니라 내가 비빈거다</i>)라는 모토를 가슴에 새기고 일하고
        있습니다.
        <br />
        <br />
        <div className="secret-text">
          {easterEgg.map((item, index) => {
            return (
              <span key={index}>
                {item}
                <br />
              </span>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
