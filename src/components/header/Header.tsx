import Image from "next/image";
import styles from "./Header.module.css";

interface HeaderProps {
  name: string;
  profileImage: string;
}

const Header = ({ name, profileImage }: HeaderProps) => {

  const nombreSinEspacios = name.replace(/\s/g, '');
  return (
    <header className={`${styles.header}`}>
      <div className={styles.flex}>
        <Image
          src={profileImage}
          alt={`${name}'s profile`}
          width={100}
          height={100}
          className={`${styles.profileImg}`}
        />
        <div>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.subtitle}>@{nombreSinEspacios}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
