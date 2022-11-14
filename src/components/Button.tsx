import React from "react";
import ShufflePlayback from "../assets/svgs/Etc/ShufflePlayback.svg";
import Playback from "../assets/svgs/Etc/Playback.svg";
import { Link } from "react-router-dom";

const Button = (props: any) => {
  if (!props.data[0] || !props.shuffle[0]) return;
  props.shuffle.sort(() => Math.random() - 0.5);
  return (
    <div className="btn-wrap">
      <Link
        to={`/player/${props.data[0].id}`}
        state={{ current: props.data[0], prev: [], next: props.data.slice(1) }}
        className="play-all fadein"
      >
        <img src={Playback} alt="" />
        <div id="play-all-text">전체재생</div>
      </Link>
      <Link
        to={`/player/${props.shuffle[0].id}`}
        state={{
          current: props.shuffle[0],
          prev: [],
          next: props.shuffle.slice(1),
        }}
        className="play-random fadein"
      >
        <img src={ShufflePlayback} alt="" />
        <div id="play-random-text">랜덤재생</div>
      </Link>
    </div>
  );
};

export default Button;
