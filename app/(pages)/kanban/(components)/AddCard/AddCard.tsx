import React, { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "@/app/utils/customHook";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CustomButton from "@/app/(components)/CustomButton/CustomButton";
interface AddCardProps {
  id: number;
}
function AddCard({ id }: AddCardProps) {
  const addCardRef = useRef<HTMLTextAreaElement>(null);
  const addRef = useRef<HTMLDivElement>(null);

  const [addCardIng, setAddCardIng] = useState<number>(0);

  useOnClickOutside(addRef, () => {
    setAddCardIng(0);
  });

  useEffect(() => {
    if (addCardIng !== 0) {
      addCardRef?.current?.focus();
    }
  }, [addCardIng]);
  return addCardIng === Number(id) ? (
    <div ref={addRef}>
      <textarea
        ref={addCardRef}
        placeholder="為這張卡片輸入名稱..."
        className="py-2 px-3 text-sm rounded-lg bg-custom-cardBg text-custom-cardText border-2 border-transparent outline-none resize-none w-full focus:border-custom-cardHover"
      />
      <div className="flex items-center gap-x-1.5">
        <CustomButton className="bg-custom-addCard">新增卡片</CustomButton>
        <div
          className="flex items-center justify-center w-8 h-8  hover:bg-custom-hoverAdd rounded cursor-pointer"
          onClick={() => setAddCardIng(0)}
        >
          <ClearIcon sx={{ color: "white", fontSize: "22px" }} />
        </div>
      </div>
    </div>
  ) : (
    <div
      className="add_card flex items-center text-white text-sm gap-x-1.5 py-1.5 pl-2 pr-3 cursor-pointer hover:bg-custom-hoverAdd rounded-lg"
      onClick={() => setAddCardIng(id)}
    >
      <AddIcon sx={{ width: "20px", height: "20px" }} />
      <p>新增卡片</p>
    </div>
  );
}

export default AddCard;
