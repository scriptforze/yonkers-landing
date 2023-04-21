import { Layout } from "@/common/layout";
import {
  Brands,
  Sliders,
  UsefulTips,
  NewProducts,
  CreateAcount,
  OffersDiscounst,
  MostWantedProducts,
} from "@/common/pages/home/components";

export default function Home() {
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
}
