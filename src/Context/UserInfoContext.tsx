import {
  createContext,
  useReducer,
  FunctionComponent,
  ReactNode,
  Dispatch,
} from "react";
import { userInfoType } from "../types";

const userDefaultInfo: userInfoType = {
  name: "",
  id: "",
  platform: "",
  profile: "",
  first: false,
};

interface resetAction {
  type: string;
  changeInfo: userInfoType;
}

type setUserInfoType = Dispatch<resetAction>;

export const userInfoContext = createContext<userInfoType>(userDefaultInfo);
export const setUserInfoContext = createContext<setUserInfoType>(() => null);

const reducer = (state: userInfoType, action: any): userInfoType => {
  switch (action.type) {
    case "reset":
      return action.changeInfo;
    default:
      return state;
  }
};

const UserInfoProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, userInfoDispatch] = useReducer(reducer, userDefaultInfo);

  return (
    <userInfoContext.Provider value={userInfo}>
      <setUserInfoContext.Provider value={userInfoDispatch}>
        {children}
      </setUserInfoContext.Provider>
    </userInfoContext.Provider>
  );
};

export default UserInfoProvider;
