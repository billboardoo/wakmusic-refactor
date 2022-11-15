import React from "react";

interface PropsType {
  title: string;
  color?: string;
}

const PageIntroduce = ({ title, color = "" }: PropsType) => {
  return (
    <>
      <div className="page-title-wrap">
        <div className="title-sub">WAKTAVERSE MUSIC</div>
        <div className="title fadein" style={{ color: `${color}` }}>
          {title}
        </div>
      </div>
      <div className="title-line" />
    </>
  );
};

export default PageIntroduce;
