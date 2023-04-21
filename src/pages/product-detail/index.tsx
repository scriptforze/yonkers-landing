import { Layout } from "@/common/layout";
import {
  Information,
  Recommended,
  SlideProduct,
} from "@/common/pages/product-detail/components";

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
