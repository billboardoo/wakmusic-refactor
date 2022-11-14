import Apple from "../../images/Apple.svg";
import Naver from "../../images/Naver.svg";
import Google from "../../images/Google.svg";

interface infoType {
  name: string;
  image: string;
  text: string;
}

export const loginTypeInfo: infoType[] = [
  {
    name: "apple",
    image: Apple,
    text: "애플",
  },
  {
    name: "naver",
    image: Naver,
    text: "네이버",
  },
  {
    name: "google",
    image: Google,
    text: "구글",
  },
];
