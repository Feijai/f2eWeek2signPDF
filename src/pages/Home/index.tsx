import React from "react";
import { HomeCss } from "./style";
import gallery from "../../assets/icon_gallery.png";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <HomeCss className="w-100">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="left">
          <button className="leftBtn">全部</button>
          <button className="leftBtn">待簽署</button>
          <button className="leftBtn">已完成</button>
          <button className="leftBtn">已取消</button>
        </div>
        <div className="right">
          <Link to={"./newpdf"}>
            <button className="new text-white">新增簽署</button>
          </Link>
          <button className="icon">
            <img src={gallery} alt="" className="gallery" />
          </button>
        </div>
      </div>
    </HomeCss>
  );
}
