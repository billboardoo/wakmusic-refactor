import { Dispatch, SetStateAction } from "react";
import { type } from "os";

export interface userInfoType {
  name: string;
  id: string;
  platform: "google" | "apple" | "naver" | "";
  profile: string;
  first: boolean;
}

export interface userInfoStateType {
  userInfo: userInfoType;
  setUserInfo: Dispatch<SetStateAction<userInfoType>>;
}
