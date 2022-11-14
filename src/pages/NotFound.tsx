import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import jururu from "../images/jururu.png";

const NotFound = () => {
  const [display, setDisplay] = useState<boolean>(false);

  const componentDidMount = () => {
    const ran = Math.floor(Math.random() * 99 + 1);
    if (ran <= 5) {
      setDisplay(true);
    }
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <div className="container fadein" id="dark-container">
      <div className="page-title-wrap">
        <div className="title-sub">404 Not Found</div>
        <div className="title">페이지를 찾을 수 없습니다.</div>
      </div>
      <div className="title-line" id="title-404" />
      {display ? (
        <div id="jururu">
          <img src={jururu} alt="" />
        </div>
      ) : null}
      <div id="ellipse_404" />
      <Footer />
    </div>
  );
};

export default NotFound;
