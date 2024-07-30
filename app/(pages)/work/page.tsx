import React from "react";
import AddIcon from "@mui/icons-material/Add";
// 7E94A4
function Work() {
  return (
    <div className="w-full h-workHeight bg-workBackGround bg-cover bg-center p-3">
      <div className="flex items-center rounded-xl bg-addColor w-272 p-3 text-sm h-44 text-white font-bold cursor-pointer gap-x-1.5 hover:bg-hoverAddColor">
        <AddIcon sx={{ width: "20px", height: "20px" }} />
        <p>新增其他列表</p>
      </div>
    </div>
  );
}

export default Work;
