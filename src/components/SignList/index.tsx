import React, { useEffect, useRef } from "react";
import { SignListCss } from "./style";
import { Link, useNavigate } from "react-router-dom";

interface SignListProps {
  signList: string[];
  chooseSign: Function;
}

const SignList: React.FC<SignListProps> = ({ signList, chooseSign }) => {
  const navigate = useNavigate()
  const imgRef = useRef<any>()

  useEffect(() => {
    const $img = imgRef.current

    if (!$img) return;

    function signHandledClick(e: any) {
      const signImg = e.target as any;
      if (!signImg) return;

      // 添加交互樣式
      const childrens = $img?.children as unknown as Element[];
      [...childrens].forEach((ele:any,idx) => {
        ele.className = "";
        ele['data-page'] = idx
      });

      signImg.parentNode.className = "active";
      // 選擇圖片
      chooseSign(signImg.src);
    }
    $img.addEventListener("click", signHandledClick);
    return () => {
      $img.removeEventListener("click", signHandledClick);
    };

  }, [signList])
  return (
    <SignListCss>
      <div className="signlist fdc" ref={imgRef}>
        {signList.length !== 0 &&
          signList.map((ele, idx) => (
            <Link to={'/signpdfpage'} key={idx}  >
              <img src={ele} alt="" className="" />
            </Link>
          ))}
      </div>
      <button
        className={`addNewSign w-100 text-white ${signList.length !== 0 ? 'mt24' : null}`}
        onClick={() => {
          navigate("/signpage");
        }}
      >
        +
      </button>
    </SignListCss>
  );
};

export default SignList;
