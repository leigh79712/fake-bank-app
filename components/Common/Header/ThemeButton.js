/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Sun from "public/images/icons/sun.svg";
import Moon from "public/images/icons/moon.svg";

const ThemeButton = ({ themeState, toggleTheme }) => (
  <div
    css={css`
      cursor: pointer;
    `}
    onClick={toggleTheme}
  >
    {themeState === "light" ? <Moon /> : <Sun />}
  </div>
);

export default ThemeButton;
