import App from "./App.jsx";
import { StrictMode } from "react";
import theme from "./mui/theme.js";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "./styles/main.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
  // </StrictMode>,
);
