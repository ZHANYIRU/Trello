"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import CardDialog from "@/app/(pages)/kanban/(components)/CardDialog/CardDialog";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { DropItem } from "@/app/types/dragDropTypes";
import AddCard from "@/app/(pages)/kanban/(components)/AddCard/AddCard";

interface DnDProps {
  items: DropItem[];
}
function DnD({ items }: DnDProps) {
  const [dropItems, setDropItems] = useState<DropItem[]>([]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;
    const copyDropItems = JSON.parse(JSON.stringify(dropItems));
    // 移動到錯誤位置就return
    if (!destination) {
      return;
    }
    // 移動原來的位置，就return
    if (
      source?.droppableId === destination?.droppableId &&
      source?.index === destination?.index
    ) {
      return;
    }

    if (type === "container") {
      const moveItem = copyDropItems[source?.index];
      copyDropItems?.splice(source?.index, 1);
      copyDropItems?.splice(destination?.index, 0, moveItem);
    }
    if (type === "CARD") {
      const sourceWrapIndex = copyDropItems?.findIndex(
        (item: DropItem) =>
          item?.id ===
          Number(source?.droppableId?.split("cards-container-").pop())
      );
      const desWrapIndex = copyDropItems?.findIndex(
        (item: DropItem) =>
          item?.id ===
          Number(destination?.droppableId?.split("cards-container-").pop())
      );
      const moveItem = copyDropItems[sourceWrapIndex]?.dragItems[source?.index];
      copyDropItems[sourceWrapIndex]?.dragItems?.splice(source?.index, 1);
      copyDropItems[desWrapIndex]?.dragItems?.splice(
        destination?.index,
        0,
        moveItem
      );
    }
    setDropItems(copyDropItems);
  };

  useEffect(() => {
    setDropItems(items);
  }, [items]);

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="container-droppable"
          type="container"
          direction="horizontal"
        >
          {(provided) => (
            <div
              className="flex gap-x-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {dropItems?.map((dropItem, dropItemIndex) => (
                <Draggable
                  draggableId={`con${dropItem?.dropID}`}
                  key={dropItem?.id}
                  index={dropItemIndex}
                >
                  {(provided, snapshot) => (
                    <div
                      className="w-272 bg-custom-card h-fit px-2  py-2 rounded-xl select-none"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <p className="text-white py-1.5 pl-3 pr-2 text-sm">
                        公告
                      </p>
                      <Droppable
                        droppableId={`cards-container-${dropItem.id}`}
                        type="CARD"
                      >
                        {(provided) => (
                          <div
                            className="card_container flex flex-col gap-y-2"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            {dropItem?.dragItems.map(
                              (dragItem, dragItemIndex) => (
                                <Draggable
                                  draggableId={`c${dragItem?.id}`}
                                  index={dragItemIndex}
                                  key={dragItem?.id}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                    >
                                      <div
                                        className={`${
                                          snapshot.isDragging
                                            ? "rotate-[4deg]"
                                            : ""
                                        }`}
                                      >
                                        <Card text={dragItem?.text} />
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              )
                            )}
                            {provided.placeholder}
                            <AddCard id={dropItem?.id} />
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <CardDialog />
    </>
  );
}

export default DnD;
