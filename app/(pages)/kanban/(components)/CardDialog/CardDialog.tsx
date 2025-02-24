import React from "react";
import { Dialog } from "@mui/material";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import FunctionButton from "./FunctionButton/FunctionButton";
import { functionButtonText } from "./utils";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachFileIcon from "@mui/icons-material/AttachFile";
function CardDialog() {
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
      PaperProps={{
        sx: {
          borderRadius: "12px",
          backgroundColor: "#323940",
          width: "768px",
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
      <div className="where_list px-2.5 mt-2">
        <p className="text-sm text-custom-cardText">
          位於
          <span className="text-[11px] font-bold text-custom-cardHover mx-1">
            To Do
          </span>
          列表
        </p>
      </div>
      <div className="dialog_content flex justify-between w-full">
        <div className="main_content px-2.5 mt-2">Content</div>
        <div className="function_button flex flex-col gap-2 ">
          {functionButtonText.map((item, index) => (
            <FunctionButton
              classes={"w-[168px] hover:brightness-[1.1]"}
              key={index}
            >
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
