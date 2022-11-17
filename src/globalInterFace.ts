export type SignType = 'rectTool' | 'image' | 'rectPos';
type ControlType = 'lt' | 'lc' | 'lb' | 'rt' | 'rc' | 'rb' | 'move';

// sign info
export interface ISignPosition {
    id: string;
    x: number;
    y: number;
    w: number;
    h: number;
    pdfCanvas: HTMLCanvasElement;
    signSrc?: string;
    image?: HTMLImageElement;
    signType: SignType;
    controlId: string;
    controlType: ControlType;
    isSelect?: boolean;
    pageIndex?: number;
}

export interface InitCanvasImageData {
    pdfCanvas: HTMLCanvasElement;
    imageData: any;
}

export interface ICanvasPosition {
    x: number;
    y: number;
}

export type UpdateSignList = (value: React.SetStateAction<ISignPosition[]>) => void;


export interface ICanvasPosition {
    x: number;
    y: number;
  }