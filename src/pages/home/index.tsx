import { Layout } from "@/common/layout";
import { Brands } from "./components/Brands";
import { CreateAcount } from "./components/CreateAcount";
import { MostWantedProducts } from "./components/MostWantedProducts";
import { NewProducts } from "./components/NewProducts/NewProducts";
import { OffersDiscounst } from "./components/OffersDiscounts";
import { Sliders } from "./components/Sliders";
import { UsefulTips } from "./components/UsefulTips";

const index = () => {
  return (
    <Layout title="Home">
      <Sliders />
      <OffersDiscounst />
      <MostWantedProducts />
      <NewProducts />
      <CreateAcount />
      <UsefulTips />
      <Brands />
    </Layout>
  );
};

export default index;
