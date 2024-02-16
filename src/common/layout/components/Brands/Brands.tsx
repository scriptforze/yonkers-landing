import Ford from "@/common/assets/images/ford.png";
import Toyota from "@/common/assets/images/toyota.png";
import Chevrolet from "@/common/assets/images/chevrolet.png";
import Mercedez from "@/common/assets/images/mercedez.png";
import BMW from "@/common/assets/images/bmw.png";
import Jeep from "@/common/assets/images/jeep.png";

import {
  BrandImage,
  BrandsTitle,
  BrandsContainer,
  BrandImageContainer,
  BrandsImagesContainer,
} from "./styled";
import { HeaderDivider, ItemsCarousel, Responsive } from "@/common/components";

const Brands = () => {
  return (
    <BrandsContainer>
      <Responsive md lg xl xxl>
        <HeaderDivider>
          <BrandsTitle>Algunas de nuestras marcas</BrandsTitle>
        </HeaderDivider>
      </Responsive>
      <Responsive xs sm>
        <BrandsTitle>Algunas de nuestras marcas</BrandsTitle>
      </Responsive>

      <ItemsCarousel
        showDots
        infinite
        keyBoardControl={true}
        items={{ xs: 3, sm: 4 }}
        removeArrowOnDeviceType={["xs", "sm", "md", "lg", "xl", "xxl"]}
      >
        <BrandImageContainer>
          <BrandImage src={BMW} alt="BMW image" />
        </BrandImageContainer>
        <BrandImageContainer>
          <BrandImage src={Ford} alt="Ford image" />
        </BrandImageContainer>
        <BrandImageContainer>
          <BrandImage src={Jeep} alt="Jeep image" />
        </BrandImageContainer>
        <BrandImageContainer>
          <BrandImage src={Toyota} alt="Toyota image" />
        </BrandImageContainer>
        <BrandImageContainer>
          <BrandImage src={Mercedez} alt="Mercedez image" />
        </BrandImageContainer>
        <BrandImageContainer>
          <BrandImage src={Chevrolet} alt="Chevrolet image" />
        </BrandImageContainer>
      </ItemsCarousel>
    </BrandsContainer>
  );
};

export default Brands;
