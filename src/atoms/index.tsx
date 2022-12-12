import { atom } from "recoil";
import { userInfoType } from "../types/index";

export const userState = atom<userInfoType>({
  key: "userInfo",
  default: {
    name: "",
    id: "",
    platform: "",
    profile: "",
    first: false,
  },
});
