export const selectCustomStyles = {
  control: (base: any) => ({
    ...base,
    outline: "none",
    border: "none",
    boxShadow: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    marginLeft: 2,
  }),
};
