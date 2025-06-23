import {Header}  from '@/components/Header/Header';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { Container } from '@mantine/core';
import { Grid } from '@mantine/core';

export function Projects() {
     const projects: Project[] = [
    {
      title: 'My Portfolio',
      description: 'Лично портфолио с Mantine, React и TypeScript.',
      image: '/images/portfolio.png',
      tags: ['React', 'Mantine', 'TypeScript'],
      demo: 'https://my-portfolio.com',
      github: 'https://github.com/myuser/portfolio',
    },
    {
      title: 'To-Do App',
      description: 'Приложение за задачи с Firebase.',
      image: '/images/todo.png',
      tags: ['React', 'Firebase', 'CSS'],
      demo: 'https://todo-app-demo.com',
      github: 'https://github.com/myuser/todo-app',
    },
     {
      title: 'USP',
      description: 'Приложение за задачи с Firebase.',
      image: '/images/todo.png',
      tags: ['React', 'Firebase', 'CSS'],
      demo: 'https://todo-app-demo.com',
      github: 'https://github.com/myuser/todo-app',
    },
  ];
  return (
    <>
    <Header/>
    
      <Container py="xl">
        <Grid gutter="xl">
          {projects.map((project, index) => (
            <Grid.Col span={{ base: 5, sm: 2, md: 4 }} key={index}>
              <ProjectCard project={project} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    <Footer/>
    </>
  );
}
