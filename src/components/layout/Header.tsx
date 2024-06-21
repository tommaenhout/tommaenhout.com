"use client"

import { useContext, useEffect } from "react";
import TypingAnimation from "../TypingAnimation";
import Context from "../context/context";

const headerMenus = [
  { title: "About", link: "about", icon: "icon fa fa-user-o" },
  { title: "Resume", link: "resume", icon: "icon fa fa-list-alt" },
  { title: "Contact", link: "contacts", icon: "icon fa fa-envelope-o" },
];

interface HeaderProps {
  noSideBarBtn?: boolean;
  menus?: any;
  animationText?: string[];
}

const Header = ({ noSideBarBtn, menus, animationText } : HeaderProps) => {
  const { changeNav, nav, changeSideBar } = useContext(Context);
  useEffect(() => {
    const sctionScroll = () => {};
    window.addEventListener("scroll", sctionScroll);
  }, []);

  const headerMenus_ = menus ? menus : headerMenus;

  return (
    <header className="header">
      <div className="profile">
        <div className="title">Tom Maenhout</div>
        <div className="subtitle subtitle-typed">
          <TypingAnimation data={animationText} />
        </div>
      </div>
      {/* menu btn */}
      {!noSideBarBtn && (
        <a href="#" onClick={() => changeSideBar(true)} className="menu-btn">
          <span />
        </a>
      )}
      {/* menu */}
      <div className="top-menu menu-minimal">
        <ul>
          {headerMenus_.map((menu : any, i : number) => (
            <li className={`${nav === menu.link ? "active" : ""}`} key={i}>
              <a href={`#${menu.link}`} onClick={() => changeNav(menu.link)}>
                <span className={menu.icon} />
                <span className="link">{menu.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
