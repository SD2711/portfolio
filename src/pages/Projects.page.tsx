import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { ActionIcon, Container, Grid } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import finalizationFive from '../components/Финализация 5.png';
import beanSceneCoffee from '../components/bean_scene_coffee_landingpage.png';
import dekstop from '../components/Dekstop.png';
import desktopOne from '../components/Desktop - 1.png';
import desktopKids from '../components/Desktop - kids.png';
import homePreview from '../components/Home.png';
import interiorDesign from '../components/Interior design.png';

export function Projects() {
  const [projectSlide, setProjectSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const projects = [
    {
      title: 'My Portfolio',
      images: [homePreview, desktopKids, finalizationFive],
    },
    {
      title: 'To-Do App',
      images: [desktopOne, interiorDesign],
    },
    {
      title: 'USP',
      images: [beanSceneCoffee, dekstop],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection(1);
      setProjectSlide((value) => value + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header />
      <div style={{ position: 'relative' }}>
        <ActionIcon
          variant="filled"
          color="orange"
          size="lg"
          radius="xl"
          onClick={() => {
            setSlideDirection(-1);
            setProjectSlide((value) => value - 1);
          }}
          aria-label="Previous project images"
          style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
        >
          <IconChevronLeft size={20} />
        </ActionIcon>
        <ActionIcon
          variant="filled"
          color="orange"
          size="lg"
          radius="xl"
          onClick={() => {
            setSlideDirection(1);
            setProjectSlide((value) => value + 1);
          }}
          aria-label="Next project images"
          style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
        >
          <IconChevronRight size={20} />
        </ActionIcon>
        <Container py="xl">
          <Grid gutter="xl">
            {projects.map((project, index) => (
              <Grid.Col span={{ base: 5, sm: 2, md: 4 }} key={index}>
                <ProjectCard project={project} activeIndex={projectSlide} direction={slideDirection} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}
