/**
 * Image Filters Module
 * Ported from legacy filters.js with full TypeScript support.
 * All filters work on ImageData and use Uint8ClampedArray for performance.
 */
/**
 * Applies sepia filter to image data
 */
export declare function applySepia(imageData: ImageData): void;
/**
 * Applies negative/invert filter to image data
 */
export declare function applyNegative(imageData: ImageData): void;
/**
 * Applies grayscale filter to image data
 */
export declare function applyGrayscale(imageData: ImageData): void;
/**
 * Applies box blur filter to image data
 */
export declare function applyBoxBlur(imageData: ImageData, radius?: number): ImageData;
/**
 * Applies melt effect - vertical pixel dripping
 */
export declare function applyMelt(imageData: ImageData, amount?: number): ImageData;
/**
 * Applies shear effect
 */
export declare function applyShear(imageData: ImageData, amount?: number, horizontal?: boolean, direction?: number): ImageData;
/**
 * Applies mosaic/pixelation effect
 */
export declare function applyMosaic(imageData: ImageData, blockSize?: number): ImageData;
