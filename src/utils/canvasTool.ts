import { v4 } from 'uuid';
import { ISignPosition } from '../globalInterFace';

const rect = 100;

export const DEFAULT_SCALE_VALUE = "page-fit";
// 顯示文字類型 0 不顯示 1 顯示 2 增強
export const TEXT_LAYER_MODE = 0;
// 是否通过CSS控制放大缩小 true false
export const USE_ONLY_CSS_ZOOM = true;


export const clearSignToolPosition = (signList: ISignPosition[]) => {
    // 没有选中，移除辅助框
    const newSignList = signList.filter(sign => {
        sign.isSelect = false;
        // sign.rotate = 0;
        const isToolLine = sign.signType === 'rectTool';
        return !isToolLine;
    });
    return newSignList;
}

export const drawRect = (ctx: CanvasRenderingContext2D, sign: ISignPosition) => {
    const { w, h } = sign;
    let x = Math.floor(sign.x);
    let y = Math.floor(sign.y);
    ctx.save();
    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
    ctx.clearRect(x + 1, y + 1, w - 2, h - 2);
    ctx.restore();
}


export const drawImage = (ctx: CanvasRenderingContext2D, sign: ISignPosition) => {
    const { isSelect, image, w, h } = sign;
    let x = Math.floor(sign.x);
    let y = Math.floor(sign.y);
    if (!image) {
        return;
    };
    // ctx.save();
    if (isSelect) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    // 如果加载过直接渲染
    if (image.complete) {
        ctx.drawImage(image, x, y, w, h);
        // ctx.restore();
    } else {
        // 渲染数据
        image.onload = function () {
            ctx.drawImage(image, x, y, w, h);
            // ctx.restore();
        }
    }
}


export const getSignToolPositon = (sign: ISignPosition) => {
    const { x, y, id, pdfCanvas, w, h } = sign;
    // 左上
    const lt: ISignPosition = {
        x: x - rect,
        y: y - rect,
        w: rect,
        h: rect,
        signType: 'rectTool',
        id: v4().slice(0, 8),
        controlId: id,
        controlType: 'lt',
        pdfCanvas,
    };
    // 左中
    const lc: ISignPosition = {
        x: x - rect,
        y: y + h / 2 - rect / 2,
        w: rect,
        h: rect,
        signType: 'rectTool',
        id: v4().slice(0, 8),
        controlId: id,
        controlType: 'lc',
        pdfCanvas,
    };
    // 左下
    const lb: ISignPosition = {
        x: x - rect,
        y: y + h,
        w: rect,
        h: rect,
        signType: 'rectTool',
        id: v4().slice(0, 8),
        controlId: id,
        controlType: 'lb',
        pdfCanvas,
    };
    // 右上
    const rt: ISignPosition = {
        x: x + w,
        y: y - rect,
        w: rect,
        h: rect,
        signType: 'rectTool',
        id: v4().slice(0, 8),
        controlId: id,
        controlType: 'rt',
        pdfCanvas,
    };
    // 右中
    const rc: ISignPosition = {
        x: x + w,
        y: y + h / 2 - rect / 2,
        w: rect,
        h: rect,
        signType: 'rectTool',
        id: v4().slice(0, 8),
        controlId: id,
        controlType: 'rc',
        pdfCanvas
    };
    // 右下
    const rb: ISignPosition = {
        x: x + w,
        y: y + h,
        w: rect,
        h: rect,
        signType: 'rectTool',
        id: v4().slice(0, 8),
        controlId: id,
        controlType: 'rb',
        pdfCanvas
    };
    return [
        lt, lc, lb, rt, rc, rb
    ]
}


