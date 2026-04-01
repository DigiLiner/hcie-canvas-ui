import { Tool } from '@hcie/core';
declare global {
    var historyManager: any;
    var openImageFile: any;
    var saveImageAsPNG: any;
    var saveProject: any;
    var loadProject: any;
    var renderVectorLayer: any;
    var buildPolygonalSelection: any;
    var copySelection: any;
    var pasteSelection: any;
    var cutSelection: any;
    var selectAll: any;
    var deselect: any;
    var invertSelection: any;
    var updateOptionsBar: any;
    var undo: ImageData[];
    var polyPoints: any[];
    var lassoPoints: any[];
    interface Window {
        undoImage: () => void;
        redoImage: () => void;
        selectTool: (tool: any) => void;
        propertiesPanel?: {
            render: () => void;
        };
    }
}
export declare let originalCanvas: HTMLCanvasElement | null;
export declare let tempCanvas: HTMLCanvasElement | null;
export declare let tempCtx: CanvasRenderingContext2D | null;
/**
 * Robust color parser using a hidden canvas
 */
export declare function parseColorToRgba(colorStr: string, opacity?: number): {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare function resizeCanvas(width: number, height: number): void;
export declare function animate(): void;
export declare function on_canvas_mouse_down(e: MouseEvent): void;
export declare function on_canvas_mouse_move(e: MouseEvent): void;
export declare function on_canvas_mouse_up(_e: MouseEvent): void;
/**
 * Utility to apply active selection mask to a context using destination-in.
 */
export declare function applySelectionMaskToCtx(targetCtx: CanvasRenderingContext2D): void;
export declare function finishDrawing(e: MouseEvent | null): void;
export declare function selectTool(tool: Tool): void;
export declare function clearSelected(): void;
export declare function undoImage(): void;
export declare function redoImage(): void;
export declare function restoreUndoState(): void;
export declare function getCanvasImageDataURL(): string;
export declare function zoomIn(e: MouseEvent | null): void;
export declare function zoomOut(e: MouseEvent | null): void;
export declare function applyZoom(oldZoom: number, e: MouseEvent | null): void;
export declare function cancelSelection(): void;
