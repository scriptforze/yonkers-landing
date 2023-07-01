import { Layout } from "@/common/layout";
import {
  Information,
  Recommended,
  SlideProduct,
} from "@/components/product-detail";
import { BASE_URL_API, axiosInstance } from "../../config/api";
import {
  GetAllProductsApiResponse,
  GetProductByIdApiResponse,
  Product,
} from "@/services/products";
import { useRouter } from "next/router";

const ProductDetail = ({ product }: { product: Product }) => {
  const router = useRouter();
  //let { id } = router.query;

  //const productId = typeof id === "string" ? parseInt(id) : undefined;

  if (router.isFallback) return <>Loading...</>;

  /*const {
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
  );*/

  //const product = productData ? productData : undefined;

  return (
    <Layout>
      <SlideProduct product={product} />
      <Information product={product} />
      <Recommended />
    </Layout>
  );
};

export async function getStaticPaths() {
  const response = await axiosInstance.get("/products", {
    params: {
      include: "images,category",
    },
  });

  const { data: products = [] } = response.data || {};
  const productsIds = products.map((product: Product) => product.id);
  const paths = productsIds.map((id: number) => ({
    params: { id: id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const productId = params.id;
  console.log("productId", productId);
  // Fetch the product data based on the ID from your API or other data source
  const response = await axiosInstance.get(`/products/${productId}`, {
    params: {
      include:
        "category,tags,product_attribute_options,product_stocks,images,stock_images,specifications",
    },
  });

  const { data: product } = response.data || {};
  return { props: { product }, revalidate: 60 };
}

export default ProductDetail;
