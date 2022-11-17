import React, { useEffect, useRef, useState } from "react";

export const useHandleCanvasEvent = (
  editingPdf: HTMLCanvasElement | null,
  choosePdf: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>,
  triggerCanvasLoad: React.Dispatch<React.SetStateAction<number>>,
  pdfRef: React.RefObject<HTMLDivElement>
) => {

  // 事件监听处理
  useEffect(() => {
    const $pdf = pdfRef.current;
    if (!$pdf) return;
    // canvaswrap 点击事件
    function pdfHandledClick(e: any) {
      // 选中canvas元素时，禁止事件冒泡
      const canvas = e.target as any;
      if (!canvas || !canvas.getContext) return;
      if (canvas.getAttribute("aria-label")) {
        triggerCanvasLoad((num: number) => ++num);
        return;
      }
      // 添加交互样式
      const childrens = $pdf?.children as unknown as Element[];
      [...childrens].forEach((ele) => {
        ele.className = "page";
      });
      canvas.parentNode.parentNode.className = "page active";
      // 保存当前画布
      choosePdf(canvas);
    }

    $pdf.addEventListener("click", pdfHandledClick);
    return () => {
      $pdf.removeEventListener("click", pdfHandledClick);
    };
  }, [editingPdf]);
};
