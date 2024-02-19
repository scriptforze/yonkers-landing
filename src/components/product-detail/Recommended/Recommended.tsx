import {
  RecommendedContainer,
  RecommendedProductsContainer,
  RecommendedTitle,
} from "./styled";
import { ItemsCarousel, ProductCard } from "@/common/components";
import { RecommendedProps } from "./types";
import { useGetAllProductsQuery } from "@/services/products";

const Recommended: React.FC<RecommendedProps> = ({ product }: RecommendedProps) => {
  const tagsString = product?.tags?.map(tag => `tag_${tag.name}`).join(" ");

  const { data: products, isSuccess } = useGetAllProductsQuery({
    include: "images,tags",
    search: tagsString,
  });

  const recomendedProducts = products?.data?.filter((recommendedProduct) => recommendedProduct.id !== product?.id);

  return recomendedProducts?.length ? (
    <RecommendedContainer>
      <RecommendedTitle>
        Complementa tu compra con estas opciones
      </RecommendedTitle>
      <RecommendedProductsContainer>
        <ItemsCarousel
          keyBoardControl={true}
          removeArrowOnDeviceType={["xs", "sm", "md"]}
        >
          {isSuccess &&
            recomendedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                price={(product.price)}
                lastPrice={product.price}
                title={product.name}
                brand={product.slug}
                imageURL={product.images![0].urls?.thumb!}

                alt={product.name}
              />
            ))
          }
        </ItemsCarousel>
      </RecommendedProductsContainer>
    </RecommendedContainer>
  ) : null;
};

export default Recommended;
