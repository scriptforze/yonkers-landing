import { FC, ReactNode } from "react";
import { Footer, Header } from "./components";
import Head from "next/head";
import { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type LayoutProps = {
  title?: string;
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`Informacion sobre ${title}`}</title>
        <meta name="author" content="Aracelly Peña" />
        <meta
          name="description"
          content={`Informacion sobre ${title}`}
        />
        <meta name="keywords" content={`${title}, yonker´s, garage`} />
        {/* TODO: Change this whit his respective variable */}
        <meta property="og:title" content={`${title}, yonker´s, garage`} />
        <meta property="og:description" content="Propiedades acerca de este producto." />
        <meta property="og:image" content="/banner.png" />
        <meta property="og:image:alt" content="Una fotografia del producto actual." />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

      </Head>

      <Suspense fallback={"asdfads"}>
        {/* <Skeleton /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </Suspense>
    </>
  );
};
