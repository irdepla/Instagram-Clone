import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

const queryclient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
        <QueryClientProvider client={queryclient}>
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
