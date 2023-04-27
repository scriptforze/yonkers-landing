import { store } from "@/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalStyles } from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}
