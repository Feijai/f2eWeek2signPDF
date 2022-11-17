import React, { useRef, useEffect, useState } from "react";
// import { useHandleCanvasEvent, IProps } from "../../hook";
import "pdfjs-dist/web/pdf_viewer.css";
import { PDFViewerCss } from "./style";
import { useHandleCanvasEvent } from "../../hook/useHandleCanvasEvent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { DEFAULT_SCALE_VALUE,TEXT_LAYER_MODE, USE_ONLY_CSS_ZOOM } from "../../utils/canvasTool";

const pdfjs = require("pdfjs-dist");
const pdfjsViewer = require("pdfjs-dist/web/pdf_viewer");
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry");

const PDFViewer = (props: any) => {
  const { pdf, choosePdf } = props;
  const pdfRef = useRef<HTMLDivElement>(null);
  const pdfFileRef = useRef<any>();
  const pdfViewerRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const eventBusRef = useRef<any>(new pdfjsViewer.EventBus());
  const linkServiceRef = useRef<any>();

  const editingPdf: any = useSelector(
    (state: RootState) => state.pdfReducer.editingPdf
  );

  const [pdfCanvasNeedLoad, triggerCanvasLoad] = useState(0);

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

  // 點擊canvas 畫布
  useHandleCanvasEvent(editingPdf, choosePdf, triggerCanvasLoad, pdfRef);

  useEffect(() => {
    if (pdf) {
      const linkService = new pdfjsViewer.PDFLinkService({
        eventBus: eventBusRef.current,
      });
      const pdfViewer = new pdfjsViewer.PDFViewer({
        container: containerRef.current,
        eventBus: eventBusRef.current,
        linkService,
        maxCanvasPixels: 5242880,
        l10n: pdfjsViewer.NullL10n,
        useOnlyCssZoom: USE_ONLY_CSS_ZOOM,
        textLayerMode: TEXT_LAYER_MODE,
      });

      linkService.setViewer(pdfViewer);
      pdfViewerRef.current = pdfViewer;
      linkServiceRef.current = linkService;
      // 設置初始缩放
      pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
      eventBusRef.current.on("pagesloaded", function () {
        pdfViewerRef.current.currentScaleValue = DEFAULT_SCALE_VALUE;
      });

      initialViewer(pdf);
    }
  }, [pdf]);

  return (
    <PDFViewerCss className="position-relative w-100 h-100">
      <div
        className="viewerContainer position-absolute w-100"
        ref={containerRef}
      >
        <div id="pdf-list w-100" ref={pdfRef} />
      </div>
    </PDFViewerCss>
  );
};

export default PDFViewer;
