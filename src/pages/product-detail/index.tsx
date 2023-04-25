import { Layout } from "@/common/layout";
import {
  Information,
  Recommended,
  SlideProduct,
} from "@/components/product-detail";

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
