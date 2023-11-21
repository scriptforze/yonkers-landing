import { Layout } from "@/common/layout";
import { ContactContainer} from "@/components/contact/ContactContainer";
import { Banner } from "@/components/contact/Banner";

const Contact = () => {

  return (
    <Layout title="Contáctanos">
      <Banner/>
      <ContactContainer />
    </Layout>
  );
};

export default Contact;
