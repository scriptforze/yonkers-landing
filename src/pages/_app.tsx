import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalStyles } from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
