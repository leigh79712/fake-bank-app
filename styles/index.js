import "normalize.css";
import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
