import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hi</h1>
      <Image src="/sahbi.jpg" alt="Profile Picture" width={200} height={200} />
      <p>Welcome to my portfolio website! I&apos;m sahbi mosrati a web developer.</p>
    </div>
  );
}
