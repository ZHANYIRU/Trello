"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragItem, DropItem, DropResult } from "@/app/types/dragDropTypes";
import AddIcon from "@mui/icons-material/Add";

function DnD() {
  const items: DropItem[] = [
    {
      id: 3,
      dropID: "dropA",
      dragItems: [
        {
          id: 11,
          text: "10/01-10/27Trello和github的連線中斷",
        },
        {
          id: 22,
          text: "10/02-10/27Trello和github的連線中斷",
        },
      ],
    },
    {
      id: 4,
      dropID: "dropB",
      dragItems: [
        {
          id: 33,
          text: "10/03-10/27Trello和github的連線中斷",
        },
        {
          id: 44,
          text: "10/04-10/27Trello和github的連線中斷",
        },
        {
          id: 55,
          text: "10/05-10/27Trello和github的連線中斷",
        },
      ],
    },
  ];
  const [dropItems, setDropItems] = useState<DropItem[]>([]);
  useEffect(() => {
    setDropItems(items);
  }, []);
  const onDragEnd = (result: any) => {
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
    console.log("result", result);
  };

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
                      className="w-272 bg-cardBlack h-fit px-2  py-2 rounded-xl select-none"
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
                                      <Card text={dragItem?.text} />
                                    </div>
                                  )}
                                </Draggable>
                              )
                            )}
                            {provided.placeholder}
                            <div className="add_card flex items-center text-white text-sm gap-x-1.5 py-1.5 pl-2 pr-3 cursor-pointer hover:bg-hoverAddColor rounded-lg">
                              <AddIcon sx={{ width: "20px", height: "20px" }} />
                              <p>新增卡片</p>
                            </div>
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
    </>
  );
}

export default DnD;
