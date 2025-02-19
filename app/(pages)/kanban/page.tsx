"use client";
import React from "react";
import { DragItem, DropItem, DropResult } from "@/app/types/dragDropTypes";
import DnD from "@/app/(components)/DnD/DnD";

import AddList from "./(components)/AddList/AddList";

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

  return (
    <div className="flex w-full h-work bg-workBg bg-cover bg-center p-3 gap-x-3">
      <DnD items={items} />
      <AddList />
    </div>
  );
}

export default Kanban;
