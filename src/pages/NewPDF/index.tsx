import React, { useState } from "react";
import { NewPDFCss } from "./style";
import cloud from "../../assets/icon_cloud.png";
import rectangle from "../../assets/Rectangle.gif";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";

interface NewPDFProps {
  uploadPdf: Function;
}

const NewPDF: React.FC<NewPDFProps> = (props) => {
  const { uploadPdf } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [now, setNow] = useState(0);
  const navigate = useNavigate();

  const handleChange = (files: any) => {
    uploadPdf(files[0]);
    setLoading(true);
    setTimeout(() => {
      setNow(100);
      setTimeout(() => {
        navigate("/signpage");
      }, 500);
    }, 2000);
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
          accept="image/pdf"
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
        {loading ? (
          <div className="fdc align-items-center">
            <img src={rectangle} alt="" className="rectangle" />
            <p className="text fontBold">upload...</p>
            <ProgressBar animated now={now} label={`${now}%`} />
          </div>
        ) : (
          <div className="fdc align-items-center">
            <img src={cloud} alt="" className="cloud" />
            <p className="text fontBold">將檔案拖放或點擊打開</p>
          </div>
        )}
      </div>
      <p className="bottomText text-center">支援上傳 PDF, JPG, PNG 等格式</p>
    </NewPDFCss>
  );
};

export default NewPDF;
