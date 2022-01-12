/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { GlobalContext } from "hooks/useGlobal";
import Sun from "public/images/icons/sun.svg";
import Moon from "public/images/icons/moon.svg";

const ThemeButton = () => {
  const { dark, switchTheme } = useContext(GlobalContext);

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
