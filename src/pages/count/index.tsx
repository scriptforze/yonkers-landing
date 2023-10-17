import { Layout } from "@/common/layout";
import { CountContainer} from "@/components/count/CountContainer";
import { ResultsBreadcrumbs } from "@/components/count/ResultsBreadcrumbs";

const Count = () => {

  return (
    <Layout title="Mi Cuenta">
      <CountContainer>
        <ResultsBreadcrumbs />
      </CountContainer>
    </Layout>
  );
};

export default Count;