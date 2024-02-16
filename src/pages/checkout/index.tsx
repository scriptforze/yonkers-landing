import { Navbar } from "@/common/layout/components/Header/Navbar";
import { CheckoutMain } from "@/components/checkout/CheckoutMain";
import { HeaderContainer } from "./styled";
import { getLatestItems } from "@/services/storeService";
import { Props } from "./types";

const Checkout = ({ product }: Props) => {

  return (
    <>
      <HeaderContainer>
        <Navbar appear={"false"} />
      </HeaderContainer>
      <CheckoutMain product={product} />
    </>
  );
};

export default Checkout;

export async function getStaticProps() {
  const res = await getLatestItems();
  return {
    props: {
      product: res,
    },
  };
}
