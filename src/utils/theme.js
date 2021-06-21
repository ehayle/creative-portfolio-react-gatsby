import { rgba } from "polished";
import { breakpoints } from "./breakpoints";

const defaultColors = {
  primary: "#0053e1", //blue
  secondary: "#fef335", //yellow (doing nothing)
  white: "#ffffff",
  dark: "#000000",
  ash: "#b2beb5",
  black: "#000000",
  warning: "#fedc5a",
  success: "#0053e1", //blue, homepage contact button
  info: "#fef335", //yellow (doing nothing)
};

const colors = {
  primary: defaultColors.primary,
  secondary: defaultColors.secondary,
  light: defaultColors.white,
  lightShade: rgba(defaultColors.white, 0.5),
  dark: defaultColors.dark,
  darkShade: rgba(defaultColors.dark, 0.5),
  ash: defaultColors.ash,
  bg: defaultColors.white,
  bgShade: rgba(defaultColors.white, 0.5),
  front: defaultColors.dark,
  frontShade: rgba(defaultColors.dark, 0.5),
  border: rgba(defaultColors.ash, 0.115),
  shadow: rgba(defaultColors.ash, 0.175),
  heading: defaultColors.dark,
  text: rgba(defaultColors.dark, 0.7),
  warning: defaultColors.warning,
  success: defaultColors.success,
  info: defaultColors.info,

  modes: {
    dark: {
      primary: defaultColors.primary,
      secondary: defaultColors.secondary,
      light: defaultColors.white,
      lightShade: rgba(defaultColors.white, 0.5),
      dark: defaultColors.dark,
      darkShade: rgba(defaultColors.dark, 0.5),
      ash: defaultColors.ash,
      bg: defaultColors.dark,
      bgShade: rgba(defaultColors.dark, 0.5),
      front: defaultColors.white,
      frontShade: rgba(defaultColors.white, 0.5),
      border: rgba(defaultColors.ash, 0.115),
      shadow: rgba(defaultColors.ash, 0.175),
      heading: defaultColors.white,
      text: rgba(defaultColors.white, 0.7),
      warning: defaultColors.warning,
      success: defaultColors.success,
      info: defaultColors.info,
    },
  },
};

const theme = {
  initialColorModeName: "dark",
  colors: colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: [
    `${breakpoints.sm}px`,
    `${breakpoints.md}px`,
    `${breakpoints.lg}px`,
    `${breakpoints.xl}px`,
  ],
};

export default theme;
