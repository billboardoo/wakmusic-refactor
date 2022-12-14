import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import styled from "styled-components";
import logo from "../../images/enter.png";

interface timeType {
  hour: number;
  min: number;
  second: number;
}

interface anniversaryType {
  day: number;
  time: timeType;
}

const Timer = () => {
  const [anniversary, setAnniversary] = useState<anniversaryType>({
    day: 0,
    time: {
      hour: 0,
      min: 0,
      second: 0,
    },
  });

  const setTime = () => {
    const start = new Date("2021, 8, 26").getTime();
    const now = new Date().getTime();
    let result = Math.abs(now - start);

    setAnniversary({
      day: Math.floor(result / (1000 * 60 * 60 * 24)),
      time: {
        hour: Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((result % (1000 * 60 * 60)) / (1000 * 60)),
        second: Math.floor((result % (1000 * 60)) / 1000),
      },
    });
  };

  useEffect(() => {
    const int = setInterval(setTime, 500);
    return () => {
      clearInterval(int);
    };
  });

  return (
    <div id="timer-wrap" className="fadein">
      <img src={logo} alt="" />
      <div>이세계아이돌 결성일로부터</div>
      <_Day>+{anniversary.day}일</_Day>
      <_Time>
        {anniversary.time.hour}시간 {anniversary.time.min}분{" "}
        {anniversary.time.second}초
      </_Time>
      <Footer />
    </div>
  );
};

const _Day = styled.h2`
  font-size: 50px;
  font-weight: 600;
  min-height: 60px;
  margin: 0px;
`;

const _Time = styled.p`
  font-size: 30px;
  margin: 0px;
  margin-bottom: 120px;
  min-height: 40px;
`;

export default Timer;
