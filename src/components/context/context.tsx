import { createContext } from "react";
import { IValue } from "./state";
const Context = createContext({
    nav: "",
    changeNav: () => {},
    sidebar: false,
    changeSideBar: () => {},
    } as IValue);
export default Context;
