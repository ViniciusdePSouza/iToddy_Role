import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

import { ProducerProvider } from "./Context/ProducerContext";
import { TagProvider } from "./Context/TagContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TagProvider>
        <ProducerProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ProducerProvider>
      </TagProvider>
    </ThemeProvider>
  );
}
