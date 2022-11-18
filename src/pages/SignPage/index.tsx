import React, { useRef, useEffect, useState } from "react";
import { SignPageCss } from "./style";
import { isPC } from "../../utils/help";

interface SignPageProps {
  saveSign: Function;
}

const SignPage: React.FC<SignPageProps> = ({ saveSign }) => {
  const canvasRef = useRef<any>(null);
  const clearRef = useRef<any>(null);
  let isPainting = false;

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;

    return canvas.getContext("2d");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const clear = clearRef.current;
    const ctx: CanvasRenderingContext2D = getContext();
    // 設定線條的相關數值
    ctx.lineWidth = 4;
    ctx.lineCap = "round";

    // 取得滑鼠 / 手指在畫布上的位置
    function getPaintPosition(e: any) {
      if (!canvas) return;
      const canvasSize = canvas.getBoundingClientRect();
      if (e.type === "mousemove") {
        return {
          x: e.clientX - canvasSize.left,
          y: e.clientY - canvasSize.top,
        };
      } else {
        return {
          x: e.touches[0].clientX - canvasSize.left,
          y: e.touches[0].clientY - canvasSize.top,
        };
      }
    }

    // 開始繪圖時，將狀態開啟
    function startPosition(e: any) {
      e.preventDefault();
      isPainting = true;
    }

    // 結束繪圖時，將狀態關閉，並產生新路徑
    function finishedPosition() {
      isPainting = false;
      ctx.beginPath();
    }

    // 繪圖過程
    function draw(e: any) {
      // 滑鼠移動過程中，若非繪圖狀態，則跳出
      if (!isPainting) return;

      // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
      const paintPosition = getPaintPosition(e) as {
        x: number;
        y: number;
      };

      // 移動滑鼠位置並產生圖案
      ctx.lineTo(paintPosition.x, paintPosition.y);
      ctx.stroke();
    }

    // 重新設定畫布
    function reset() {
      let imgWidth = canvas.width;
      ctx.clearRect(0, 0, canvas?.width, canvas?.height);
    }

    if (isPC) {
      // event listener 電腦板
      canvas.addEventListener("mousedown", startPosition);
      canvas.addEventListener("mouseup", finishedPosition);
      canvas.addEventListener("mouseleave", finishedPosition);
      canvas.addEventListener("mousemove", draw);
    } else {
      // event listener 手機板
      canvas.addEventListener("touchstart", startPosition);
      canvas.addEventListener("touchend", finishedPosition);
      canvas.addEventListener("touchcancel", finishedPosition);
      canvas.addEventListener("touchmove", draw);
    }

    clear.addEventListener("click", reset);
  });

  return (
    <SignPageCss className="w-100 h-100">
      <canvas
        id="canvas"
        width="500"
        height="300"
        ref={canvasRef}
        style={{
          boxShadow: " 2px 2px 10px 2px rgba(0, 0, 0, 0.1)",
          borderRadius: " 4px",
        }}
      />
      <div className="func dCenter">
        <button className="clear text-white" ref={clearRef}>
          clear
        </button>
        <button
          className="save text-white"
          onClick={() => {
            saveSign(canvasRef.current.toDataURL());
          }}
        >
          save
        </button>
      </div>
    </SignPageCss>
  );
};

export default SignPage;
