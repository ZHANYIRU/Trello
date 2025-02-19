import React from "react";
import { Dialog } from "@mui/material";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
function CardDialog() {
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
              "&.Mui-focused input": {
                backgroundColor: "#22272B",
              },
            },
          }}
          className="w-full"
          value={"重估-互動之組件/微服務調整為流程"}
          // rows={1}
          multiline
        />
        <CloseIcon className="fill-custom-cardText cursor-pointer" />
      </div>
    </Dialog>
  );
}

export default CardDialog;
