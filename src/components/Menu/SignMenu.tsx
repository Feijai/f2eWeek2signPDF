import React from "react";
import { SignMenuCss } from "./style";
import { menuData2 } from "./menuData";

interface SignMenuProps {
  active: string;
  handleClick: Function
}

const SignMenu: React.FC<SignMenuProps> = (props) => {
  const { active, handleClick } = props
  return (
    <SignMenuCss className="d-flex">
      <div className="icons fdc">
        {menuData2.map((ele, idx) => (
          <button key={idx} onClick={()=>handleClick(ele.title)}>
            {active === ele.title ?
              <img src={ele.active} alt="" className="icon" /> :
              <img src={ele.icon} alt="" className="icon" />}

          </button>
        ))}
      </div>
      <div className="func">
        <p className="text text-center">文件</p>
        <div className="files fdc">
          <div>
            <div className="file"></div>
            <p className=" text-center fileText">1</p>
          </div>
          <div>
            <div className="file"></div>
            <p className=" text-center fileText">2</p>
          </div>
        </div>

      </div>
    </SignMenuCss>
  );
}
export default SignMenu