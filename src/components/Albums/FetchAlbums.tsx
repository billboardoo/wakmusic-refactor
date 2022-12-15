import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useToDay from "../../Hooks/useToDay";
import InfiniteScroll from "./InfiniteScroll";

type albumsType = "month" | "year";
type arrowType = "all" | "left" | "right";

const FetchAlbums = () => {
  const [type, setType] = useState<albumsType>("month");
  const [plusNum, setPlusNum] = useState<number>(0);
  const [arrowState, setArrowState] = useState<arrowType>("left");
  const { toDay } = useToDay(plusNum, type);

  let date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);

  const changeType = (type: string) => {
    setType(type as albumsType);
    setPlusNum(0);
  };

  const prevTime = () => {
    if (type == "month") {
      if (toDay > 201501) {
        setPlusNum(plusNum - 1);
      }
    } else {
      if (toDay > 2015) {
        setPlusNum(plusNum - 1);
      }
    }
  };

  const nextTime = () => {
    if (type == "month") {
      if (toDay < parseInt(year + month)) {
        setPlusNum(plusNum + 1);
      }
    } else {
      if (toDay < year) {
        setPlusNum(plusNum + 1);
      }
    }
  };

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
      <_TimeTitle>
        {type == "month" ? toDay.toString().replace(/(.{4})/g, "$1.") : toDay}
      </_TimeTitle>
      <div className="albums-body fadein">
        {/* <InfiniteScroll type={type} toDay={toDay} /> */}
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
  margin: 0px;
`;

export default FetchAlbums;
