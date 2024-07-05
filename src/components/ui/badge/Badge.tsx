import styles from './Badge.module.css';

interface SectionTitleProps {
  interest: string;
}

const Badge = ({ interest }: SectionTitleProps) => {
  return (
    <p className={styles.interest}>{interest}</p>
  );
};

export default Badge;
