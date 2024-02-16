import { Layout } from "@/common/layout";
import {
  Sliders,
  UsefulTips,
  NewProducts,
  CreateAcount,
  OffersDiscounst,
  MostWantedProducts,
} from "@/components/home";

export default function Home() {
  return (
    <Layout title="Home">
      <Sliders />
      <OffersDiscounst />
      <MostWantedProducts />
      <NewProducts />
      <CreateAcount />
      <UsefulTips />
    </Layout>
  );
}
