import React, { useEffect, useRef, useState } from "react";

export const useHandleCanvasEvent = (
  editingPdf: HTMLCanvasElement | null,
  choosePdf: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>,
  pdfRef: React.RefObject<HTMLDivElement>
) => {

  useEffect(() => {
    const $pdf = pdfRef.current;
    if (!$pdf) return;
    // canvaswrap click event
    function pdfHandledClick(e: any) {
      // 选中canvas元素时，禁止事件冒泡
      const canvas = e.target as any;
      if (!canvas || !canvas.getContext) return;

      // 添加交互樣式
      const childrens = $pdf?.children as unknown as Element[];
      [...childrens].forEach((ele) => {
        ele.className = "page";
      });
      canvas.parentNode.parentNode.className = "page active";
      // 儲存頁面
      choosePdf(canvas.parentNode.parentNode.getAttribute("data-page-number"));
    }

    $pdf.addEventListener("click", pdfHandledClick);
    return () => {
      $pdf.removeEventListener("click", pdfHandledClick);
    };
  }, [editingPdf]);
};
