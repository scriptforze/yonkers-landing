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
          content={"Informacion sobre el pokemon ${ title }"}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};
