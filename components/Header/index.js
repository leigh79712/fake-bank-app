/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Header = () => {
  const color = "darkgreen";
  return (
    <header
      css={css`
        background-color: hotpink;
        color: black;
        &:hover {
          color: ${color};
        }
      `}
    >
      Header
    </header>
  );
};

export default Header;
