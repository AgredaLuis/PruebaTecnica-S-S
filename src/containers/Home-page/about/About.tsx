import SectionTitle from "../../../components/ui/SectionTitle/SectionTitle";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={`${styles.about}`}>
      <SectionTitle title="Sobre mi" />
      <p className={styles.description}>
        Soy estudiante de ultimo semestre de la carrera de Ingeniería en
        Computacion, actualmente en proceso de tesis para optar por el titulo, A traves de
        la experiencia note que me lo que mas atrapa mi atencion, es impulsar
        marcas a travez de la tecnologia. Dando un proposito de contribucion,
        servicio y con impacto.
      </p>
    </section>
  );
};

export default About;
