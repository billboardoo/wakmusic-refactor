import { createContext } from "react";
import { userInfoStateType } from "../types";

export const userInfoContext = createContext<userInfoStateType | null>(null);
