import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <Image src={project.img} alt={project.title} width={300} height={200} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
