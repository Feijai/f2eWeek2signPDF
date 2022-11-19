import React, { useRef, useEffect, useState } from "react";
import { SignPDFPageCss } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fabric } from 'fabric'
import { jsPDF } from "jspdf";

interface SignPageProps {
  pdf: ArrayBuffer | null;
  pdfDownload: Function
}

const SignPDFPage: React.FC<SignPageProps> = (props) => {
  const { pdfDownload } = props
  const fabricRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const editingPdf = useSelector(
    (state: RootState) => state.pdfReducer.editingPdf
  );
  const downloadPdf = useSelector((state: RootState) => state.pdfReducer.downloadPdf)

  const signChoose = useSelector((state: RootState) => state.signReducer.signChoose)

  useEffect(() => {

    const canvas = new fabric.Canvas("canvas", {
      backgroundImage: editingPdf,
    });
    fabricRef.current = canvas
    fabric.Image.fromURL(signChoose, function (image) {
      // 設定簽名出現的位置及大小，後續可調整
      image.top = 400;
      image.scaleX = 0.5;
      image.scaleY = 0.5;
      canvas.add(image);
    });
    // canvas.setWidth(pdfImage.width / window.devicePixelRatio);
    // canvas.setHeight(pdfImage.height / window.devicePixelRatio);


  }, [editingPdf, signChoose,])

  useEffect(() => {
    if (downloadPdf) {
      const pdf = new jsPDF();
      const canvas = fabricRef.current
      // 將 canvas 存為圖片
      const image = canvas.toDataURL();
      // 設定背景在 PDF 中的位置及大小
      const width = pdf.internal.pageSize.width;
      const height = pdf.internal.pageSize.height;
      pdf.addImage(image, "png", 0, 0, width, height);
      // 將檔案取名並下載
      pdf.save("download.pdf");
      pdfDownload();
    }
  }, [downloadPdf])
  return <SignPDFPageCss className="w-100 h-100" >
    <canvas
      id="canvas"
      ref={fabricRef}
      width={546}
      height={760}
      style={{
        boxShadow: " 2px 2px 10px 2px rgba(0, 0, 0, 0.1)",
        borderRadius: " 4px",
      }}
    />

  </SignPDFPageCss>;
};

export default SignPDFPage;
