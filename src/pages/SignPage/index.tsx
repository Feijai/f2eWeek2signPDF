import React, { useRef, useEffect } from "react";
import { SignPageCss } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Root } from "react-dom/client";
import {
  DEFAULT_SCALE_VALUE,
  TEXT_LAYER_MODE,
  USE_ONLY_CSS_ZOOM,
} from "../../utils/canvasTool";

const pdfjs = require("pdfjs-dist");
const pdfjsViewer = require("pdfjs-dist/web/pdf_viewer");
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry");

interface SignPageProps {
  pdf: ArrayBuffer | null;
}

const SignPage: React.FC<any> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eventBusRef = useRef<any>(new pdfjsViewer.EventBus());
  const pdfFileRef = useRef<any>();
  const pdfViewerRef = useRef<any>();
  const linkServiceRef = useRef<any>();

  const editingPdf = useSelector(
    (state: RootState) => state.pdfReducer.editingPdf
  );
  // console.log("===editingPdf===", editingPdf);
  // console.log(typeof editingPdf)
  const pdfRef = useRef<HTMLDivElement>(null);

  // render
  const initialViewer = async (pdfBuffer: any) => {
    pdfFileRef.current = pdfjs.getDocument(pdfBuffer).promise;

    pdfFileRef.current
      .then((pdf: any) => {
        // console.timeEnd(`pdf解析成功：//${pdfUrl}`);
        if (pdfViewerRef.current) {
          pdfViewerRef.current.setDocument(pdf);
          linkServiceRef.current.setDocument(pdf);
        }
        return;
      })
      .catch((err: any) => {
        return err;
      });
  };

  // useEffect(() => {
  //   if (editingPdf) {
  //     const linkService = new pdfjsViewer.PDFLinkService({
  //       eventBus: eventBusRef.current,
  //     });
  //     const pdfViewer = new pdfjsViewer.PDFViewer({
  //       container: containerRef.current,
  //       eventBus: eventBusRef.current,
  //       linkService,
  //       maxCanvasPixels: 5242880,
  //       l10n: pdfjsViewer.NullL10n,
  //       useOnlyCssZoom: USE_ONLY_CSS_ZOOM,
  //       textLayerMode: TEXT_LAYER_MODE,
  //     });

  //     linkService.setViewer(pdfViewer);
  //     pdfViewerRef.current = pdfViewer;
  //     linkServiceRef.current = linkService;
  //     // 設置初始缩放
  //     pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
  //     eventBusRef.current.on("pagesloaded", function () {
  //       pdfViewerRef.current.currentScaleValue = DEFAULT_SCALE_VALUE;
  //     });

  //     initialViewer(editingPdf);
  //   }
  // }, [editingPdf]);

  return (
    <SignPageCss className="position-relative w-100 h-100">
      <div className="viewerContainer position-absolute" ref={containerRef}>
        {/* <div className="pdf-list" ref={pdfRef} /> */}
        {editingPdf && editingPdf}
      </div>
    </SignPageCss>
  );
};

export default SignPage;
