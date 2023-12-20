import {
  RecommendedContainer,
  RecommendedProductsContainer,
  RecommendedTitle,
} from "./styled";
import { ItemsCarousel, ProductCard } from "@/common/components";
import { Props } from "./types";

const Recommended = ({product}: Props) => {
  return (
    <RecommendedContainer>
      <RecommendedTitle>
        Complementa tu compra con estas opciones
      </RecommendedTitle>

        <RecommendedProductsContainer>
          <ItemsCarousel
            keyBoardControl={true}
            removeArrowOnDeviceType={["xs", "sm", "md"]}
          >
            {product.map((element) => (
              <ProductCard
                key={element.id}
                id={element.id}
                price={`$${(element.price - (element.price * 0.2)).toLocaleString("es-CO")}`}
                lastPrice={`$${element.price.toLocaleString("es-CO")}`}
                title={element.name + " " + element.description}
                brand={element.brand}
                imageURL={element.image_url[0]}
                alt={element.name}
              />
            ))}
          </ItemsCarousel>
        </RecommendedProductsContainer>
    </RecommendedContainer>
  );
};

export default Recommended;
