import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useToDay from "../../Hooks/useToDay";
import InfiniteScroll from "./InfiniteScroll";

type albumsType = "month" | "year";

const FetchAlbums = () => {
  const [type, setType] = useState<albumsType>("month");
  const [plusNum, setPlusNum] = useState<number>(0);
  const { toDay } = useToDay(plusNum, type);

  const changeType = (type: string) => {
    setType(type as albumsType);
  };

  const prevTime = () => {
    if (type === "month") {
      if (time === "2015.01") {
        return;
      }

      let year = timeObj.split(".")[0];
      let month = timeObj.split(".")[1];
      if (month === "01") {
        year -= 1;
        month = "12";
      } else {
        month--;
      }
      setTime(year + "." + (month < 10 ? "0" + month : month));

      if (time === "2015.02")
        document.getElementById("arrow-left-albums").className =
          "arrow-inactive";
    } else {
      if (time === "2015") {
        return;
      }

      let year = timeObj;
      year -= 1;
      setTime("" + year);

      if (time === "2016")
        document.getElementById("arrow-left-albums").className =
          "arrow-inactive";
    }

    if (time - 1 !== getCurrentTime()) {
      document.getElementById("arrow-right-albums").className = "arrow-active";
    }
  };

  const nextTime = () => {
    if (type === "month") {
      if (time === getCurrentTime()) {
        return;
      }

      let year = timeObj.split(".")[0];
      let month = timeObj.split(".")[1];
      if (month === "12") {
        year++;
        month = "1";
      } else {
        month++;
      }
      setTime(year + "." + (month < 10 ? "0" + month : month));
      if (year + "." + month === getCurrentTime())
        document.getElementById("arrow-right-albums").className =
          "arrow-inactive";
    } else {
      if (time === getCurrentTime().slice(0, 4)) {
        return;
      }

      let year = timeObj;
      year++;
      setTime("" + year);

      if (year + "" === getCurrentTime().slice(0, 4))
        document.getElementById("arrow-right-albums").className =
          "arrow-inactive";
    }

    if (time === "2015.01" || time === "2015") {
      document.getElementById("arrow-left-albums").className = "arrow-active";
    }
  };

  if (!time) return <div className="loading" />;
  return (
    <>
      <div id="select-type">
        <_AlbumsType
          onOff={type == "month"}
          onClick={() => changeType("month")}
        >
          월별
        </_AlbumsType>
        <_AlbumsType onOff={type == "year"} onClick={() => changeType("year")}>
          연도별
        </_AlbumsType>
      </div>
      <div className="select-bar-arrow arrow-albums">
        <div
          className="arrow-inactive"
          id="arrow-right-albums"
          onClick={() => nextTime()}
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.12403 1.45753L1.58156 9L9.12403 16.5425"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className="arrow-active"
          id="arrow-left-albums"
          onClick={() => prevTime()}
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.12403 1.45753L1.58156 9L9.12403 16.5425"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <_TimeTitle>{time}</_TimeTitle>
      <div className="albums-body fadein">
        <InfiniteScroll type={type} toDay={toDay} />
      </div>
    </>
  );
};

interface AlbumsTypeProps {
  onOff: boolean;
}

const _AlbumsType = styled.button<AlbumsTypeProps>`
  text-align: center;
  width: 70px;
  height: 35px;
  border: none;
  background-color: #e3e5eb;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: ${(props) => (props.onOff ? 700 : 500)};
  color: ${(props) => (props.onOff ? "#202f61" : "#8c95af")};
  cursor: pointer;
  padding-bottom: 3px;
  border-bottom: ${(props) =>
    props.onOff ? "3px solid #00f3f3" : "3px solid #e3e5eb"};
`;

const _TimeTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #080f34;
  text-align: center;
  user-select: none;
`;

export default FetchAlbums;
