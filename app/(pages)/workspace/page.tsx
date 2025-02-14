import React from "react";

function WorkSpace() {
  return (
    <div className="bg-custom-black h-work">
      <div className="w-1/2 pt-10 mx-auto">
        <h2 className="text-custom-cardText font-bold text-base">您的工作區</h2>
        <div className="flex flex-col py-5 gap-5">
          <div className="work_title flex items-center gap-2">
            <div className="work_icon w-8 h-8 rounded bg-purple-400 flex justify-center items-center text-xl font-bold">
              中
            </div>
            <h3 className=" text-custom-cardText font-bold">中信科標</h3>
          </div>
          <div>
            <div className="add_kanban flex w-[195px] h-[96px] bg-[#282d33] justify-center items-center rounded text-custom-cardText text-sm hover:brightness-[1.2] cursor-pointer">
              建立新的看板
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
