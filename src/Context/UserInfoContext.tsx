import { createContext, useReducer, FunctionComponent, ReactNode } from "react";
import { userInfoType, setUserInfoType } from "../types";

const userDefaultInfo: userInfoType = {
  name: "",
  id: "",
  platform: "",
  profile: "",
  first: false,
};

export const userInfoContext = createContext<userInfoType>(userDefaultInfo);
export const setUserInfoContext = createContext<setUserInfoType>(() => null);

const reducer = (state: userInfoType, action: any): userInfoType => {
  return state;
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
