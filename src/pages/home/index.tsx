import { Brands } from "./components/Brands";
import { CreateAcount } from "./components/CreateAcount";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MostWantedProducts } from "./components/MostWantedProducts";
import { NewProducts } from "./components/NewProducts/NewProducts";
import { OffersDiscounst } from "./components/OffersDiscounts";
import { Sliders } from "./components/Sliders";
import { UsefulTips } from "./components/UsefulTips";

const index = () => {
  return (
    <>
      <Header />
      <Sliders />
      <OffersDiscounst />
      <MostWantedProducts />
      <NewProducts />
      <CreateAcount />
      <UsefulTips />
      <Brands />
      <Footer />
    </>
  );
};

export default index;
