
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className={styles.title}>{title}</h2>
  );
};

export default SectionTitle;
