import {
  RecommendedContainer,
  RecommendedProductsCardsContainer,
  RecommendedProductsContainer,
  RecommendedTitle,
} from "./styled";
import { ItemsCarousel, ProductCard } from "@/common/components";
import ProductSearch from "@/common/assets/images/productSearch.png";

const Recommended = ({item}) => {
  return (
    <RecommendedContainer>
      <RecommendedTitle>
        Complementa tu compra con estas opcioness
      </RecommendedTitle>

        <RecommendedProductsContainer>
          <ItemsCarousel
            keyBoardControl={true}
            removeArrowOnDeviceType={["xs", "sm", "md"]}
          >
            {item.map((element) => (
              <ProductCard
                key={element.id}
                id={element.id}
                price={"$" + (element.price - ((element.price) * 0.10))}
                lastPrice={"$" + element.price}
                title={element.name + " " + element.description}
                brand={element.brand}
                imageURL={element.image_url[0]}
                alt={element.name}
              />
            ))}
            <ProductCard
              id={2}
              price= {"$" + 23456}
              lastPrice={"$" + `${654332}`}
              title=" Engine Oil Pump for Hyundai Accent 1995 - 2001 1.5L SOHC"
              brand=" HYUNDAI"
              imageURL={ProductSearch}
              alt="Engine Oil Pump for Hyundai"
            />
          </ItemsCarousel>
        </RecommendedProductsContainer>
    </RecommendedContainer>
  );
};

export default Recommended;
