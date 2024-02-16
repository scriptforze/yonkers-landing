import { Layout } from "@/common/layout";
import { CountContainer, ResultsBreadcrumbs, CountProps } from "@/components/count";
// import { getLatestItems } from "@/services/storeService";

const Count = ({ product }: CountProps) => {

  return (
    <Layout title="Mi Cuenta">
      <CountContainer>
        <ResultsBreadcrumbs product={product} />
      </CountContainer>
    </Layout>
  );
};

export default Count;

// export async function getStaticProps() {
//   const res = await getLatestItems();
//   return {
//     props: {
//       product: res,
//     },
//   };
// }
