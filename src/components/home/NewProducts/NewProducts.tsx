import ProductSearch from "@/common/assets/images/productSearch.png";

import { PlusCircleOutlined } from "@ant-design/icons";
import { ScrollableProducts } from "@/common/components";
import { useGetAllProductsQuery } from "@/services/products";
import { ProductCard } from "@/common/components/ProductCard";

import {
  NewProductsTitle,
  NewProductsHeader,
  NewProductsCTAButton,
  NewProductsContainer,
} from "./styled";

export const NewProducts = () => {
  const { data: products } = useGetAllProductsQuery({
    include: "images",
  });

  return products?.data?.length ? (
    <NewProductsContainer>
      <NewProductsHeader>
        <NewProductsTitle>Productos Nuevos</NewProductsTitle>
        <NewProductsCTAButton icon={<PlusCircleOutlined />}>
          Ver todos
        </NewProductsCTAButton>
      </NewProductsHeader>
      <ScrollableProducts.Container numProducts={1}>
        {products?.data?.map((product) => (
          <ScrollableProducts.ProductContainer key={product.id}>
            <ProductCard
              brand="Hyundai"
              title={product.name}
              price={product.price}
              imageURL={product?.images?.[0].urls.original || ""}
            />
          </ScrollableProducts.ProductContainer>
        ))}
      </ScrollableProducts.Container>
    </NewProductsContainer>
  ) : null;
};

export default NewProducts;
