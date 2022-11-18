import React from "react";
import { HeaderCss } from "./style";
import menu from "../../assets/icon_menu_enable.png";
import menuClose from "../../assets/icon_menu_close.png";
import logo from "../../assets/logo_dottedsign.png";
import bellIn from "../../assets/icon_notice-1.png";
import user from "../../assets/user_icon_1_100 1.png";
import search from "../../assets/icon_search.png";
import { Link } from "react-router-dom";

interface Header {
  menutype: string;
  state: boolean;
  open: Function;
}

const Header: React.FC<Header> = (props) => {
  const { state, open, menutype } = props;
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
        <Link to={"./"}>
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>
      <div>
        {menutype === "/" && (
          <>
            <img src={search} alt="" />
            <img src={bellIn} alt="" className="bell" />
          </>
        )}

        <button className="save text-white">儲存</button>
        <img src={user} alt="" className="user" />
      </div>
    </HeaderCss>
  );
};
export default Header;
