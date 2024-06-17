"use client";

import React, { useReducer, ReactNode } from "react";
import Context from "./context";

const type = {
  NAV: "NAV",
  SIDEBAR: "SIDEBAR",
};

interface StateType {
  nav: string;
  sidebar: boolean;
}

interface ActionType {
  type: string;
  payload: any;
}

export interface IValue {
  nav: string;
  changeNav: (value: string) => void;
  sidebar: boolean;
  changeSideBar: (value: boolean) => void;
}

const navReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.SIDEBAR:
      return {
        ...state,
        sidebar: action.payload,
      };
    default:
      return state;
  }
};

interface StateProps {
  children: ReactNode;
}

const State = ({ children }: StateProps) => {
  const initialState: StateType = {
    nav: "about",
    sidebar: false,
  };

  const [state, dispatch] = useReducer(navReducer, initialState);

  const changeNav = (value: string) => {
    dispatch({
      type: type.NAV,
      payload: value,
    });
  };

  const changeSideBar = (value: boolean) => {
    dispatch({
      type: type.SIDEBAR,
      payload: value,
    });
  };

  return (
    <Context.Provider
      value={{
        // nav
        nav: state.nav,
        changeNav,
        // sidebar
        sidebar: state.sidebar,
        changeSideBar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default State;
