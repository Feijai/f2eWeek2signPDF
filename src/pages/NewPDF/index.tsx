import React, { useState } from "react";
import { NewPDFCss } from "./style";
import cloud from "../../assets/icon_cloud.png";

export default function NewPDF() {
  const handleChange = (files: any) => {
    // if (files[0].size < 10 * 1024 * 1024) {
    //   state.files.push(files[0]);
    //   setState({ ...state });
    // } else {
    //   snackActions.error("圖片超過上傳限制");
    // }
    console.log(files);
  };
  return (
    <NewPDFCss>
      <p className="text-center fontBold">上傳文件</p>
      <div className="position-relative dCenter pdfinput">
        <input
          className="file-upload-input"
          type="file"
          onChange={(value) => {
            handleChange(value.target.files);
          }}
          accept="image/*"
          style={{
            position: "absolute",
            margin: "0",
            padding: "0",
            width: "100%",
            height: "100%",
            outline: "none",
            opacity: "0",
            cursor: "pointer",
          }}
        />
        <div className="fdc align-items-center">
          <img src={cloud} alt="" className="cloud" />
          <p className="text fontBold">將檔案拖放或點擊打開</p>
        </div>
      </div>
      <p className="bottomText">支援上傳PDF,JPG,Png等格式</p>
    </NewPDFCss>
  );
}
