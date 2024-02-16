import { Layout } from "@/common/layout";
import {
  Information,
  Recommended,
  SlideProduct,
} from "@/components/product-detail";
import { axiosInstance } from "@/config/api";
import { Product } from "@/services/products";
import { useRouter } from "next/router";

// import DashboardSkeleton from 

const ProductDetail = ({ product }: { product: Product }) => {
  const router = useRouter();
  if (router.isFallback) return <>Loading...</>;

  return (
    <Layout title={product.name}>
      <SlideProduct product={product} />
      <Information product={product} />
      <Recommended product={product} />
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
  const response = await axiosInstance.get(`/products/${productId}`, {
    params: {
      include:
        "category,tags,product_attribute_options,product_stocks,images,stock_images,specifications",
    },
  });

  const { data: product } = response.data || {};
  if (!product) return { redirect: { destination: "/", permanent: false } };

  return { props: { product }, revalidate: 60 };
}

export default ProductDetail;
