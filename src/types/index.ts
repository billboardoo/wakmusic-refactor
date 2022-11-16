import { Dispatch, SetStateAction } from "react";

export interface userInfoType {
  name: string;
  id: string;
  platform: "google" | "apple" | "naver" | "";
  profile: string;
  first: boolean;
}

export type setUserInfoType = Dispatch<SetStateAction<userInfoType>>;
