import "normalize.css";
import { Global, css, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          font-size: 62.5%;
          box-sizing: border-box;
        }
        body {
          background-color: ${theme.background};
          color: ${theme.color};
        }
      `}
    />
  );
};

export default GlobalStyle;
