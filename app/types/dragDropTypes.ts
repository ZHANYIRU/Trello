export interface DragItem {
  id: number;
  text: string;
}

export interface DropItem {
  id: number;
  dropID: string;
  dragItems: DragItem[];
}

export interface DropResult {
  draggableId: string;
  type: string;
  source: {
    droppableId: string;
    index: number;
  };
  destination: {
    droppableId: string;
    index: number;
  } | null;
  reason: "DROP" | "CANCEL";
  mode: "FLUID" | "SNAP";
  combine: null;
}
