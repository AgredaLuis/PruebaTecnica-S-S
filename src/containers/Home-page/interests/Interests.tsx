import Badge from '../../../components/ui/badge/Badge';
import SectionTitle from '../../../components/ui/SectionTitle/SectionTitle';
import styles from './Interests.module.css';



const ListInterests = [
  { id: 1, interest: 'Web Development' },
  { id: 2, interest: 'Open Source' },
  { id: 3, interest: 'Volleyball' },
  { id: 4, interest: 'Dance' },
  { id: 5, interest: 'Anime' },
  { id: 6, interest: 'Self-taught person' },
  { id: 7, interest: 'insightful ' },
];

const Interests = () => {
    return (
        <section className={styles.interests}>
          <SectionTitle title="Me Apasiona" />
          <div className={styles.interestsList}>
          {
          ListInterests.map(({ id, interest }) => (
            <Badge key={id} interest={interest} />
          ))
        }
          </div>
        </section>
      );
}

export default Interests