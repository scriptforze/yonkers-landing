import { Navbar } from "@/common/layout/components/Header/Navbar";
import { CheckoutMain, HeaderContainer, CheckoutProps } from "@/components/checkout";
// import { getLatestItems } from "@/services/storeService";

const Checkout = ({ product }: CheckoutProps) => {

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

// export async function getStaticProps() {
//   const res = await getLatestItems();
//   return {
//     props: {
//       product: res,
//     },
//   };
// }
