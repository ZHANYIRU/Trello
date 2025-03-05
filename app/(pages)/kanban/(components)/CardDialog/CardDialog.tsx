import React, { useState } from "react";
import { Dialog, TextField } from "@mui/material";

import FunctionButton from "./FunctionButton/FunctionButton";
import Image from "next/image";
import { functionButtonText } from "./utils";
import DateTimePopper from "./DateTimePopper/DateTimePopper";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CardDialog() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const id = open ? "transition-popper" : undefined;
  const whichButtonIcon = (type: string): JSX.Element | null => {
    switch (type) {
      case "addUser":
        return <PersonAddIcon className="w-4 h-4" />;
      case "delUser":
        return <PersonRemoveIcon className="w-4 h-4" />;
      case "user":
        return <PersonIcon className="w-4 h-4" />;
      case "toDoList":
        return <EventAvailableIcon className="w-4 h-4" />;
      case "date":
        return <AccessTimeIcon className="w-4 h-4" />;
      case "appendix":
        return <AttachFileIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={true}
      onClose={() => {}}
      fullWidth
      maxWidth="md"
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: "12px",
          backgroundColor: "#323940",
          width: "768px",
          height: "80vh",
          padding: "16px",
        },
      }}
    >
      <div className="card_dialog_title  flex justify-between gap-3">
        <TextField
          InputProps={{ className: "p-0" }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& textarea": {
                borderRadius: "2px",
                padding: "6px 10px",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                color: "#B6C2CF",
              },
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused textarea": {
                backgroundColor: "#22272B",
              },
            },
          }}
          className="w-full"
          value={"重估-互動之組件/微服務調整為流程"}
          multiline
        />
        <CloseIcon className="fill-custom-cardText cursor-pointer" />
      </div>
      <div className="where_list px-2.5">
        <p className="text-sm text-[#9FADBC]">
          位於
          <span className="text-[11px] font-bold text-custom-cardHover mx-1">
            To Do
          </span>
          列表
        </p>
      </div>
      <div className="dialog_content flex justify-between w-full">
        <div className="main_content  mt-2 flex-auto">
          <div className="notify_bar flex px-2.5 text-custom-cardText text-xs gap-x-6">
            <div className="member">
              <p className="mb-1">成員</p>
              <div className="member_img flex gap-x-1">
                <div className="img_container w-8 h-8 overflow-hidden rounded-full ">
                  <Image
                    src={
                      "https://trello-members.s3.amazonaws.com/63ec4772bf13b54655970c9f/8cc7cc24b93766fdad34a456fa06c096/170.png"
                    }
                    alt="member"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="rounded-full w-8 h-8 bg-custom-fnBtnBg flex justify-center items-center cursor-pointer">
                  <AddIcon />
                </div>
              </div>
            </div>
            <div className="notify">
              <p className="mb-1">通知</p>
              <div className="track bg-custom-fnBtnBg py-1.5 px-2.5 flex items-center gap-x-2  text-sm cursor-pointer rounded-[3px]">
                <RemoveRedEyeIcon className="w-4 h-4" />
                <p>追蹤</p>
              </div>
            </div>
            <div className="expiration_date">
              <p className="mb-1">到期日</p>
              <div
                className="date py-1.5 px-2.5 text-custom-cardText bg-custom-fnBtnBg text-sm cursor-pointer rounded-[3px] flex gap-x-2 items-center"
                onClick={handleClick}
                aria-describedby={id}
              >
                <p>2月26日 下午4:04</p>
                <KeyboardArrowDownIcon className="w-4 h-4" />
              </div>
              <DateTimePopper id={id} open={open} anchorEl={anchorEl} />
            </div>
          </div>
        </div>
        <div className="function_button flex flex-col gap-2 ">
          {functionButtonText.map((item, index) => (
            <FunctionButton classes={"w-[168px]"} key={index}>
              {whichButtonIcon(item.icon)}
              {item.text}
            </FunctionButton>
          ))}
        </div>
      </div>
    </Dialog>
  );
}

export default CardDialog;
