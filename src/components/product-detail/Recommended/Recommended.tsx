import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  RecommendedContainer,
  RecommendedProductsContainer,
  RecommendedTitle,
} from "./styled";
import { ItemsCarousel, ProductCard } from "@/common/components";
import { Props } from "./types";

interface ProductData {
  id: number;
  price: number;
  name: string;
  description: string;
  slug: string;
  images: [
    urls: {
      original: string;
    }
  ];
}

const Recommended: React.FC<Props> = ({ product }: Props) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const tag = product?.tags?.[0]?.name;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ecommerceapi.scriptforze.com/api/v1/products?include=images&search=tag_${tag}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    };
    fetchData();
  }, [tag]);

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
          {Array.isArray(products.data) &&
            products.data.map((pro) => (
              <ProductCard
                key={pro.id}
                id={pro.id}
                price={(pro.price - pro.price * 0.2)}
                lastPrice={pro.price}
                title={pro.name}
                brand={pro.slug}
                imageURL={pro.images[0].urls.original}
                alt={pro.name}
              />
            ))
          }
        </ItemsCarousel>
      </RecommendedProductsContainer>
    </RecommendedContainer>
  );
};

export default Recommended;
