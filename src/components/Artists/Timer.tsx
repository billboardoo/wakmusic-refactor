import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import styled from "styled-components";
import logo from "../../images/enter.png";

interface anniversaryType {
  day: string;
  time: string;
}

const Timer = () => {
  const [anniversary, setAnniversary] = useState<anniversaryType>({
    day: "",
    time: "",
  });

  const setTime = () => {
    const start = new Date("2021, 8, 26").getTime();
    const now = new Date().getTime();
    let result = Math.abs(now - start);
    let days = result / (1000 * 60 * 60 * 24);
    let hours = (result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    let minutes = (result % (1000 * 60 * 60)) / (1000 * 60);
    let seconds = (result % (1000 * 60)) / 1000;

    setAnniversary({
      day: `+${Math.floor(days)}일`,
      time: `${Math.floor(hours)}시간 ${
        minutes < 10 ? "0" + Math.floor(minutes) : Math.floor(minutes)
      }분 ${seconds < 10 ? "0" + Math.floor(seconds) : Math.floor(seconds)}초`,
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
      <_Day>{anniversary.day}</_Day>
      <_Time>{anniversary.time}</_Time>
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
