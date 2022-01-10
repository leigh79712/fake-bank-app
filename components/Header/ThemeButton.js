/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "hooks/useDark";
import Sun from "public/images/icons/sun.svg";
import Moon from "public/images/icons/moon.svg";

const ThemeButton = () => {
  const { dark, switchTheme } = useContext(ThemeContext);

  return (
    <div
      css={css`
        cursor: pointer;
      `}
      onClick={switchTheme}
    >
      {dark ? <Sun /> : <Moon />}
    </div>
  );
};

export default ThemeButton;
