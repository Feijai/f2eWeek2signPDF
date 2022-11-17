import React from "react";
import { SignMenuCss } from "./style";
import { menuData2 } from "./menuData";
import PDFViewer from "../PDFViewer";

interface SignMenuProps {
  active: string;
  handleClick: Function;
  pdf: ArrayBuffer | null;
  choosePdf: Function;
}

const SignMenu: React.FC<SignMenuProps> = (props) => {
  const { active, handleClick, pdf, choosePdf } = props;
  return (
    <SignMenuCss className="d-flex">
      <div className="icons fdc">
        {menuData2.map((ele, idx) => (
          <button key={idx} onClick={() => handleClick(ele.title)}>
            {active === ele.title ? (
              <img src={ele.active} alt="" className="icon" />
            ) : (
              <img src={ele.icon} alt="" className="icon" />
            )}
          </button>
        ))}
      </div>
      <div className="func">
        <p className="text text-center">文件</p>
        <PDFViewer pdf={pdf} choosePdf={choosePdf} />
      </div>
    </SignMenuCss>
  );
};
export default SignMenu;
