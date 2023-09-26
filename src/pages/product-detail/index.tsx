import { SlideProduct, Recommended, Information } from "@/components/product-detail";
import { getLatestItems } from "@/services/storeService";
import { Layout } from "@/common/layout";

const Info = ({ items }) => {
  
  return (
    <>
      <Layout title="Information">
        <SlideProduct product={items}/>
          <Information product={items}/>
          <Recommended item={items}/>
      </Layout>
    </>
  );
};

export default Info;

export async function getStaticProps() {
  const res = await getLatestItems();
  return {
    props: {
      items: res,
    },
  };
}