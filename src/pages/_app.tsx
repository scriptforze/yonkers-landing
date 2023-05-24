import { store } from "@/store";
import { Provider } from "react-redux";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { GlobalThemeProvider } from "@/common/components";
import "react-multi-carousel/lib/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalThemeProvider theme={theme}>
        <NextUIProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </NextUIProvider>
      </GlobalThemeProvider>
    </Provider>
  );
}
