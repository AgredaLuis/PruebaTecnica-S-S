import SectionTitle from "../../../components/ui/SectionTitle/SectionTitle";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={`${styles.about}`}>
      <SectionTitle title="Sobre mi" />
      <p className={styles.description}>
        I'm a passionate software engineer with a love for building innovative
        and user-friendly applications. In my free time, I enjoy exploring new
        technologies, reading about the latest industry trends, and contributing
        to open-source projects.
      </p>
    </section>
  );
};

export default About;
