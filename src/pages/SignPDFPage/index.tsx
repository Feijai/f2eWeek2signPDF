import React, { useRef, useEffect, useState } from "react";
import { SignPDFPageCss } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface SignPageProps {
  pdf: ArrayBuffer | null;
}

const SignPDFPage: React.FC<any> = (props) => {
  const editingPdf = useSelector(
    (state: RootState) => state.pdfReducer.editingPdf
  );

  // console.log("===editingPdf===", editingPdf);
  const pdfFileRef = useRef<any>();
  const pdfViewerRef = useRef<any>();
  const isPdfEndLoadRef = useRef<boolean>(false);
  const [isPdfBeginLoad, pdfBeginLoaded] = useState(false);
  const [pdfCanvasNeedLoad, triggerCanvasLoad] = useState(0);
  const [curPdfCanvas, saveCurPdfCanvas] = useState<HTMLCanvasElement | null>(
    null
  );
  const [showSignWritePannelState, toggleShowSignWritePannel] = useState(false);

  return <SignPDFPageCss className="w-100 h-100">
    <img src={editingPdf} alt="" />
  </SignPDFPageCss>;
};

export default SignPDFPage;
