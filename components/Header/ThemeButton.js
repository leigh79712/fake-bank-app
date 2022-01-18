/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Sun from "public/images/icons/sun.svg";
import Moon from "public/images/icons/moon.svg";

const ThemeButton = ({ dark, switchTheme }) => (
  <div
    css={css`
      cursor: pointer;
    `}
    onClick={switchTheme}
  >
    {dark ? <Sun /> : <Moon />}
  </div>
);

export default ThemeButton;
