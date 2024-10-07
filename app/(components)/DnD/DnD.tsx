"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragItem, DropItem, DropResult } from "@/app/types/dragDropTypes";
import { useOnClickOutside } from "@/app/utils/customHook";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

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
  const addCardRef = useRef<HTMLTextAreaElement>(null);
  const addRef = useRef<HTMLDivElement>(null);
  const [dropItems, setDropItems] = useState<DropItem[]>([]);
  const [addCardIng, setAddCardIng] = useState<number>(0);

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
  };

  useOnClickOutside(addRef, () => {
    setAddCardIng(0);
  });

  useEffect(() => {
    setDropItems(items);
  }, []);

  useEffect(() => {
    if (addCardIng !== 0) {
      addCardRef?.current?.focus();
    }
  }, [addCardIng]);

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
                            {addCardIng === Number(dropItem?.id) ? (
                              <div ref={addRef}>
                                <textarea
                                  ref={addCardRef}
                                  placeholder="為這張卡片輸入名稱..."
                                  className="py-2 px-3 text-sm rounded-lg bg-cardBackGround text-cardTextColor border-none outline-none resize-none w-full"
                                />
                                <div className="flex items-center gap-x-1.5">
                                  <button className="bg-addCardColor rounded px-3 leading-8 text-sm">
                                    新增卡片
                                  </button>
                                  <div className="flex items-center justify-center w-8 h-8  hover:bg-hoverAddColor rounded cursor-pointer">
                                    <ClearIcon
                                      sx={{ color: "white", fontSize: "22px" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div
                                className="add_card flex items-center text-white text-sm gap-x-1.5 py-1.5 pl-2 pr-3 cursor-pointer hover:bg-hoverAddColor rounded-lg"
                                onClick={() => setAddCardIng(dropItem?.id)}
                              >
                                <AddIcon
                                  sx={{ width: "20px", height: "20px" }}
                                />
                                <p>新增卡片</p>
                              </div>
                            )}
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
