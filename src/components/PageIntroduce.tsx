import React from "react";

interface PropsType {
  title: string;
}

const PageIntroduce = ({ title }: PropsType) => {
  return (
    <>
      <div className="page-title-wrap">
        <div className="title-sub">WAKTAVERSE MUSIC</div>
        <div className="title fadein">{title}</div>
      </div>
      <div className="title-line" />
    </>
  );
};

export default PageIntroduce;
