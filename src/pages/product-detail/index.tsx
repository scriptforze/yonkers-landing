import { Layout } from "@/common/layout";
import React from "react";
import { SlideProduct } from "./components/slideProduct";
import Information from "./components/information/Information";
import { Recommended } from "./components/recommended";

const ProductDetail = () => {
  return (
    <Layout>
      <SlideProduct />
      <Information />
      <Recommended />
    </Layout>
  );
};

export default ProductDetail;
