import { Layout } from "@/common/layout";
import {
  Information,
  Recommended,
  SlideProduct,
} from "@/components/product-detail";
import { Product, useGetProductByIdQuery } from "@/services/products";
import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  let { id } = router.query;

  const productId = typeof id === "string" ? parseInt(id) : undefined;

  const {
    data: productData,
    isError: isProductDataError,
    isFetching: isProductDataFetching,
  } = useGetProductByIdQuery(
    {
      product: productId!,
      include:
        "category,tags,product_attribute_options,product_stocks,images,stock_images,specifications",
    },
    { skip: !productId }
  );

  const product = productData ? productData : undefined;

  return (
    <Layout>
      <SlideProduct product={product} />
      <Information product={product} />
      <Recommended />
    </Layout>
  );
};

export default ProductDetail;
