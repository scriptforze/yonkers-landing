import { Layout } from "@/common/layout";
import { ContactContainer, ContactBanner } from "@/components/contact";

const Contact = () => {

  return (
    <Layout title="Contáctanos">
      <ContactBanner />
      <ContactContainer />
    </Layout>
  );
};

export default Contact;
