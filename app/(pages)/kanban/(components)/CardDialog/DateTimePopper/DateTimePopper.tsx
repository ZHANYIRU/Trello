import React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Select from "react-select";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "@/app/(components)/CustomButton/CustomButton";
import { notify, styles } from "../utils";
interface DateTimePopperProps {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLElement | null;
}
function DateTimePopper({ id, open, anchorEl }: DateTimePopperProps) {
  return (
    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
      transition
      sx={{ zIndex: 3000 }}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 5],
          },
        },
      ]}
      placement="bottom-start"
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={200}>
          <div className="date_time_popper bg-[#282E33] p-3 rounded-lg   text-custom-cardText">
            <div className="date_title  flex justify-between items-center">
              <p className="flex-1 text-center">日期</p>
              <CloseIcon className="w-4 h-4" />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                sx={{
                  "& .MuiPickersDay-root": {
                    color: "#B6C2CF ", // 日期數字
                  },
                  "& .MuiDayCalendar-weekDayLabel": {
                    color: "#B6C2CF ", // 星期標題（SUN, MON, TUE...）
                  },
                  "& .MuiPickersCalendarHeader-label": {
                    color: "#B6C2CF ", // 年/月標題
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#B6C2CF ", // icon,
                  },
                  "& .MuiPickersDay-root:focus.Mui-selected": {
                    backgroundColor: "#1c2b4e", // 點擊和鍵盤導航時都變紅色
                  },
                  "& .MuiPickersDay-root.Mui-selected": {
                    backgroundColor: "#1c2b4e",
                  },
                }}
              />
            </LocalizationProvider>
            <div className="select_notify mb-3">
              <p className="text-xs">設定提醒</p>
              <Select options={notify} styles={styles} isSearchable={false} />
              <p className="text-sm mt-2">
                提醒將發送給此卡片的所有成員和關注者。
              </p>
            </div>
            <div className="date_time_button flex flex-col gap-y-2">
              <CustomButton className="bg-custom-addCard text-black">
                儲存
              </CustomButton>
              <CustomButton className="bg-custom-dialogBg">移除</CustomButton>
            </div>
          </div>
        </Fade>
      )}
    </Popper>
  );
}

export default DateTimePopper;
