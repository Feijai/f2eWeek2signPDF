import React, { useState } from "react";
import { MenuCss } from "./style";
import { menuData, menuData2 } from "./menuData";
import Pro from "./Pro";
import phone from "../../assets/icon_smartphone.png";
import statesGreen from "../../assets/states_green.png";
import SignMenu from './SignMenu'

interface MenuProps {
  menutype: string;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { menutype } = props;
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {menutype === "/signpage" ? (
        active === null ? (
          <MenuCss className="h-100 fdc justify-content-between">
            <div className="topBtn fdc">
              {menuData2.map((ele, idx) => (
                <button key={idx} className="menuBtn d-flex" onClick={()=>{setActive(ele.title)}}>
                  <img src={ele.icon} alt="" className="icon" />
                  <p className="title">{ele.title}</p>
                  {(ele.title === "核取方塊" || ele.title === "選擇鈕") && (
                    <img src={statesGreen} alt="" className="statesGreen" />
                  )}
                </button>
              ))}
            </div>
          </MenuCss>
        ) : <SignMenu active={active} setActive={setActive}/>
      ) : (
        <MenuCss className="h-100 fdc justify-content-between">
          <div className="topBtn fdc">
            {menuData.map((ele, idx) => (
              <button key={idx} className="menuBtn d-flex">
                <img src={ele.icon} alt="" className="icon" />
                <p className="title">{ele.title}</p>
              </button>
            ))}
          </div>
          <div className="fdc">
            <Pro />
            <button className="menuBtn bottomBtn d-flex">
              <img src={phone} alt="" />
              <p className="title">安裝應用程式</p>
            </button>
          </div>
        </MenuCss>
      )}
    </>
  );
};

export default Menu;