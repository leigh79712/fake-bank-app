import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
