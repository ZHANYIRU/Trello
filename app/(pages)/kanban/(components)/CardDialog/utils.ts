import { StylesConfig, GroupBase } from "react-select";
export const functionButtonText = [
  { icon: "addUser", text: "加入" },
  { icon: "delUser", text: "退出" },
  { icon: "user", text: "成員" },
  { icon: "toDoList", text: "待辦清單" },
  { icon: "date", text: "日期" },
  { icon: "appendix", text: "附件" },
];

export const notify = [
  {
    value: 0,
    label: "無",
  },
  {
    value: 1,
    label: "期限",
  },
  {
    value: 2,
    label: "5分鐘前",
  },
  {
    value: 3,
    label: "10分鐘前",
  },
  {
    value: 4,
    label: "15分鐘前",
  },
  {
    value: 5,
    label: "1小時前",
  },
  {
    value: 6,
    label: "2小時前",
  },
  {
    value: 7,
    label: "1天前",
  },
  {
    value: 8,
    label: "2天前",
  },
];

export const styles: StylesConfig<any, false, GroupBase<any>> = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused
      ? `#99c8ff !important`
      : baseStyles.borderColor,
    borderRadius: "5px",
    boxShadow: state.isFocused ? `0 0 0 1px #99c8ff` : baseStyles.boxShadow,
    "&:hover": {
      borderColor: state.isFocused ? `#99c8ff` : baseStyles.borderColor,
    },
    background: "#22272B",
    fontSize: "14px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#B6C2CF",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: `rgba(255, 255, 255, 0.059)`,
    },
    color: state.isSelected ? `#99c8ff` : `#B6C2CF`,
    backgroundColor: state.isSelected ? `#1c2b4e` : undefined,
    fontSize: "14px",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#22272B", // 修改選項列表整片背景顏色
  }),
  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      width: "8px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888888", // 滾動條顏色
      borderRadius: "4px",
    },
    "::-webkit-scrollbar-track": {
      background: "#222", // 滾動條軌道顏色
    },
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 3000,
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: "1em",
    color: "#cccccc",
    fontWeight: 400,
  }),
};
