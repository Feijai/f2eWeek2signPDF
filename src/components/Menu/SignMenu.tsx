import React from "react";
import { SignMenuCss } from "./style";
import { menuData2 } from "./menuData";

export default function SignMenu() {
  return (
    <SignMenuCss className="d-flex">
      <div className="icons fdc">
        {menuData2.map((ele, idx) => (
          <button key={idx}>
            <img src={ele.icon} alt="" className="icon"/>
          </button>
        ))}
      </div>
      <div className="func"></div>
    </SignMenuCss>
  );
}
