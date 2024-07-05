import  ContactForm  from "../../../components/ContactForm/ContactForm";
import SectionTitle from "../../../components/ui/SectionTitle/SectionTitle";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <SectionTitle title="Hablemos" />
      <ContactForm />
    </section>
  );
};

export default Contact;
