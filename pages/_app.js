import { StrictMode } from "react";
import GlobalStyle from "styles/index";

const App = ({ Component, pageProps }) => (
  <StrictMode>
    <GlobalStyle />
    <Component {...pageProps} />
  </StrictMode>
);

export default App;
