import React from "react";
import { SignMenuCss } from "./style";
import { menuData2 } from "./menuData";
import PDFViewer from "../PDFViewer";
import SignList from "../SignList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface SignMenuProps {
  active: string;
  handleClick: Function;
  pdf: ArrayBuffer | null;
  choosePdf: Function;
  chooseSign: Function;
}

const SignMenu: React.FC<SignMenuProps> = (props) => {
  const { active, handleClick, pdf, choosePdf, chooseSign } = props;
  const signList = useSelector(
    (state: RootState) => state.signReducer.signList
  );

  return (
    <SignMenuCss className="d-flex">
      <div className="icons fdc">
        {menuData2.map((ele, idx) => (
          <button onClick={() => handleClick(ele.title)} key={idx}>
            {active === ele.title ? (
              <img src={ele.active} alt="" className="icon" />
            ) : (
              <img src={ele.icon} alt="" className="icon" />
            )}
          </button>
        ))}
      </div>
      <div className="func">
        {active === "文件" && (
          <>
            <p className="text text-center">{active}</p>
            <PDFViewer pdf={pdf} choosePdf={choosePdf} />
          </>
        )}
        {active === "簽名" && (
          <>
            <p className="text text-center">{active}</p>
            <SignList signList={signList} chooseSign={chooseSign} />
          </>
        )}
      </div>
    </SignMenuCss>
  );
};
export default SignMenu;
