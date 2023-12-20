import { FC, ReactNode } from "react";
import { Footer, Header } from "./components";
import Head from "next/head";

type LayoutProps = {
  title?: string;
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="author" content="Aracelly Peña" />
        <meta
          name="description"
          content={`"Informacion sobre ${ title }"`}
        />
        <meta name="keywords" content={`${title}, yonker´s, garage`} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Source+Code+Pro&family=Source+Sans+3&display=swap" rel="stylesheet" />

      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
