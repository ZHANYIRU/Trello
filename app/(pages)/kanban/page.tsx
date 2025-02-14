"use client";
import React, { useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useOnClickOutside } from "@/app/utils/customHook";
import { useState, useEffect } from "react";
import { DragItem, DropItem, DropResult } from "@/app/types/dragDropTypes";
import DnD from "@/app/(components)/DnD/DnD";
import ClearIcon from "@mui/icons-material/Clear";

function Kanban() {
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
  const cardListRef = useRef<HTMLDivElement>(null);
  const addCardInputRef = useRef<HTMLInputElement>(null);

  const [addCardListIng, setAddCardListIng] = useState(false);

  useOnClickOutside(cardListRef, () => {
    setAddCardListIng(false);
  });

  useEffect(() => {
    if (addCardListIng) {
      addCardInputRef?.current?.focus();
    }
  }, [addCardListIng]);

  return (
    <div className="flex w-full h-work bg-workBg bg-cover bg-center p-3 gap-x-3">
      <DnD items={items} />
      {addCardListIng ? (
        <div
          className="bg-custom-card h-fit px-2  py-2 rounded-xl select-none w-272"
          ref={cardListRef}
        >
          <div className=" flex flex-col gap-y-2">
            <input
              type="text"
              ref={addCardInputRef}
              placeholder="輸入列表名稱..."
              className="py-1 px-3 text-sm rounded-md bg-custom-cardBg  text-custom-cardText border-2 border-transparent  outline-none  w-full focus:border-custom-cardHover"
            />
            <div className="flex items-center gap-x-1.5">
              <button className="bg-custom-addCard rounded px-3 leading-8 text-sm">
                新增列表
              </button>
              <div
                className="flex items-center justify-center w-8 h-8  hover:bg-custom-hoverAdd rounded cursor-pointer"
                onClick={() => setAddCardListIng(false)}
              >
                <ClearIcon sx={{ color: "white", fontSize: "22px" }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex items-center rounded-xl bg-custom-add w-272 p-3 text-sm h-44 text-white font-bold cursor-pointer gap-x-1.5 hover:bg-custom-hoverAdd"
          onClick={() => setAddCardListIng(true)}
        >
          <AddIcon sx={{ width: "20px", height: "20px" }} />
          <p>新增其他列表</p>
        </div>
      )}
    </div>
  );
}

export default Kanban;
