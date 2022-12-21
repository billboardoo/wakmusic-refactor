import React, { useState } from "react";
import { albumsType, arrowType } from "../../types/albums";
import styled from "styled-components";
import useToDay from "../../Hooks/useToDay";
import useAlbums from "../../Hooks/useAlbums";
import AlbumsArrow from "../../assets/svgs/Etc/AlbumsArrow";
import InfiniteScroll from "./InfiniteScroll";

const FetchAlbums = (): JSX.Element => {
  const [type, setType] = useState<albumsType>("month");
  const [plusNum, setPlusNum] = useState<number>(0);
  const { toDay } = useToDay(plusNum, type);
  const { arrowState, changeType, nextTime, prevTime } = useAlbums({
    setPlusNum: setPlusNum,
    type: type,
    setType: setType,
    toDay: toDay,
  });

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
      <_TitleLayout>
        <span onClick={prevTime}>
          <AlbumsArrow
            direction="left"
            state={arrowState == "all" || arrowState == "left"}
          />
        </span>
        <_TimeTitle>
          {type == "month" ? toDay.toString().replace(/(.{4})/g, "$1.") : toDay}
        </_TimeTitle>
        <span onClick={nextTime}>
          <AlbumsArrow
            direction="right"
            state={arrowState == "all" || arrowState == "right"}
          />
        </span>
      </_TitleLayout>
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

const _TitleLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin: 0px;
`;

const _TimeTitle = styled.h2`
  width: fit-content;
  font-size: 28px;
  font-weight: 700;
  color: #080f34;
  text-align: center;
  user-select: none;
  margin: 0px;
`;

export default FetchAlbums;
