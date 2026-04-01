import { LayerClass } from '@hcie/core';
/**
 * Layer Manager
 * Handles layer operations: add, delete, select, visibility, reorder, render
 */
/**
 * Add a new layer above the active layer
 */
export declare function addLayer(name?: string): void;
export declare function addVectorLayer(): void;
/**
 * Delete the active layer (prevents deleting the last layer)
 */
export declare function deleteLayer(): void;
/**
 * Select a layer by index
 */
export declare function selectLayer(index: number): void;
/**
 * Toggle visibility of a layer
 */
export declare function toggleLayerVisibility(index: number): void;
/**
 * Move a layer from one position to another
 */
export declare function moveLayer(fromIndex: number, toIndex: number, skipRecord?: boolean): void;
/**
 * Move active layer up (visually higher = later in array)
 */
export declare function moveLayerUp(): void;
/**
 * Move active layer down (visually lower = earlier in array)
 */
export declare function moveLayerDown(): void;
/**
 * Rename a layer
 */
export declare function renameLayer(index: number, newName: string): void;
/**
 * Composite all visible layers onto the drawing canvas (bottom to top)
 * @param {HTMLCanvasElement} [liveCanvas] - Optional temp canvas for the active layer (used during drawing)
 */
export declare function renderLayers(liveCanvas?: HTMLCanvasElement): void;
/**
 * Get the active layer object
 */
export declare function getActiveLayer(): LayerClass;
/**
 * Update the Layers panel UI to reflect current layer state
 */
export declare function updateLayerPanel(): void;
export declare function renderVectorLayer(layer: LayerClass): void;
export declare function renderTextLayer(layer: LayerClass): void;
