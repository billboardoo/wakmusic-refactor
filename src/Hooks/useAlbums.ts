import { Dispatch, SetStateAction, useState } from "react";
import { albumsType, arrowType } from "../types/albums";

interface parameter {
  setPlusNum: Dispatch<SetStateAction<number>>;
  toDay: number;
  type: albumsType;
  setType: Dispatch<SetStateAction<albumsType>>;
}

const useAlbums = ({ setPlusNum, toDay, type, setType }: parameter) => {
  const [arrowState, setArrowState] = useState<arrowType>("left");

  let date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);

  const changeType = (type: string) => {
    setType(type as albumsType);
    setPlusNum(0);
    setArrowState("left");
  };

  const prevTime = () => {
    if (type == "month") {
      if (toDay > 201501) {
        setPlusNum((num) => num - 1);
        setArrowState("all");
        if (toDay == 201502) {
          setArrowState("right");
        }
      }
    } else {
      if (toDay > 2015) {
        setPlusNum((num) => num - 1);
        setArrowState("all");
        if (toDay == 2016) {
          setArrowState("right");
        }
      }
    }
  };

  const nextTime = () => {
    if (type == "month") {
      if (toDay < parseInt(year + month)) {
        setPlusNum((num) => num + 1);
        setArrowState("all");
        if (toDay == parseInt(year + month) - 1) {
          setArrowState("left");
        }
      }
    } else {
      if (toDay < year) {
        setPlusNum((num) => num + 1);
        setArrowState("all");
        if (toDay == year - 1) {
          setArrowState("left");
        }
      }
    }
  };

  return {
    prevTime,
    nextTime,
    changeType,
    arrowState,
  };
};

export default useAlbums;
