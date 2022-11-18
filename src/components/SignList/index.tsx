import React from "react";
import { SignListCss } from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SignList: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const signList = useSelector(
    (state: RootState) => state.signReducer.signList
  );
  return (
    <SignListCss>
      {signList.length &&
        signList.map((ele, idx) => (
          <img src={ele} alt="" className="" key={idx} />
        ))}
      <button
        className="addNewSign w-100 text-white"
        onClick={() => {
          navigate("/signpage");
        }}
      >
        +
      </button>
    </SignListCss>
  );
});

export default SignList;
