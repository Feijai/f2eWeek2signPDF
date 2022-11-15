import React from "react";
import { HeaderCss } from "./style";
import menu from "../../assets/icon_menu_enable.png";
import menuClose from "../../assets/icon_menu_close.png";
import logo from "../../assets/logo_dottedsign.png";
import bellIn from '../../assets/icon_notice-1.png'
import user from '../../assets/user_icon_1_100 1.png'
import search from '../../assets/icon_search.png'

interface Header {
  state: boolean;
  open: Function;
}

const Header: React.FC<Header> = (props) => {
  const { state, open } = props;
  return (
    <HeaderCss className="d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <button
          onClick={() => {
            open();
          }}
          className="menu"
        >
          {state ? (
            <img src={menu} alt="" className="w-100 h-100" />
          ) : (
            <img src={menuClose} alt="" className="w-100 h-100" />
          )}
        </button>
        <img src={logo} alt="" className="logo" />
      </div>
      <div>
        <img src={search} alt="" />
        <img src={bellIn} alt="" className="bell"/>
        <img src={user} alt="" className="user" />
      </div>
    </HeaderCss>
  );
};
export default Header;
