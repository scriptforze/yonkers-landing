import { PlusCircleOutlined } from "@ant-design/icons";
import { HeaderDivider, ItemsCarousel } from "@/common/components";
import { useGetAllProductsQuery } from "@/services/products";
import { ProductCard } from "@/common/components/ProductCard";

import {
  NewProductsTitle,
  NewProductsHeader,
  NewProductsCTAButton,
  NewProductsContainer,
} from "./styled";
import { useResponsive } from "@/common/hooks";

export const NewProducts = () => {
  const { shouldRender } = useResponsive({
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  });
  const { data: products } = useGetAllProductsQuery({
    include: "images,category",
  });

  return products?.data?.length ? (
    <NewProductsContainer>
      <NewProductsHeader>
        <HeaderDivider>
          <NewProductsTitle>Productos Nuevos</NewProductsTitle>
        </HeaderDivider>
        <NewProductsCTAButton icon={<PlusCircleOutlined />}>
          {shouldRender ? "Ver todos los productos" : "Ver todos"}
        </NewProductsCTAButton>
      </NewProductsHeader>

      <ItemsCarousel
        keyBoardControl={true}
        removeArrowOnDeviceType={["xs", "sm", "md"]}
      >
        {products?.data?.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            title={product.name}
            price={product.price}
            brand={product?.category?.name || ""}
            imageURL={product?.images?.[0]?.urls.original || ""}
          />
        ))}
      </ItemsCarousel>
    </NewProductsContainer>
  ) : null;
};

export default NewProducts;
