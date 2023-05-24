import { ProductCard } from "@/common/components/ProductCard";

import {
  MostWantedProductsTitle,
  MostWantedProductsHeader,
  MostWantedProductsCTAButton,
  MostWantedProductsContainer,
} from "./styled";

import { PlusCircleOutlined } from "@ant-design/icons";
import { HeaderDivider, ItemsCarousel, Responsive } from "@/common/components";
import { useResponsive } from "@/common/hooks";
import { useGetAllProductsQuery } from "@/services/products";

export const MostWantedProducts = () => {
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
    <MostWantedProductsContainer>
      <MostWantedProductsHeader>
        <Responsive md lg xl xxl>
          <HeaderDivider>
            <MostWantedProductsTitle>
              Productos Mas Buscados
            </MostWantedProductsTitle>
          </HeaderDivider>
        </Responsive>
        <Responsive xs sm>
          <MostWantedProductsTitle>
            Productos Mas Buscados
          </MostWantedProductsTitle>
        </Responsive>

        <MostWantedProductsCTAButton icon={<PlusCircleOutlined />}>
          {shouldRender ? "Ver todos los productos" : "Ver todos"}
        </MostWantedProductsCTAButton>
      </MostWantedProductsHeader>

      <ItemsCarousel
        keyBoardControl={true}
        removeArrowOnDeviceType={["xs", "sm", "md"]}
      >
        {products?.data?.map((product) => (
          <ProductCard
            brand={product?.category?.name || ""}
            key={product.id}
            title={product.name}
            price={product.price}
            imageURL={product?.images?.[0]?.urls.original || ""}
          />
        ))}
      </ItemsCarousel>
    </MostWantedProductsContainer>
  ) : null;
};

export default MostWantedProducts;
