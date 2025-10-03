import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', img: '/project1.png' },
    { title: 'Project 2', description: 'Description of project 2', img: '/project2.png' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Projects</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </div>
  );
}
