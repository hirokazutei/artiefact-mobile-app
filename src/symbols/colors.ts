type ColorTypes =
  | "danger"
  | "defaultText"
  | "disabled"
  | "faded"
  | "primary"
  | "secondary"
  | "disabled"
  | "white";

export const colors: { [key in ColorTypes]: string } = {
  danger: "#ff2323",
  defaultText: "#2d2832",
  disabled: "#808080",
  faded: "#b4afbe",
  primary: "#4A0D67",
  secondary: "#FFC145",
  white: "#FFFFFF"
};