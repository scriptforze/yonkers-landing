import { Layout } from "@/common/layout";
import { CountContainer} from "@/components/count/CountContainer";
import { ResultsBreadcrumbs } from "@/components/count/ResultsBreadcrumbs";
import { getLatestItems } from "@/services/storeService";
import { Props } from "./types";

const Count = ({product}: Props) => {

  return (
    <Layout title="Mi Cuenta">
      <CountContainer>
        <ResultsBreadcrumbs product={product} />
      </CountContainer>
    </Layout>
  );
};

export default Count;

export async function getStaticProps() {
  const res = await getLatestItems();
  return {
    props: {
      product: res,
    },
  };
}
