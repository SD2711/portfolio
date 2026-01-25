import { Header } from '@/components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import {
  Anchor,
  Avatar,
  ActionIcon,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import {
  IconBrandLinkedin,
  IconMail,
  IconPalette,
  IconLayoutGrid,
  IconDeviceLaptop,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import aboutPhoto from '../components/Welcome/stefani.jpg';
import finalizationFive from '../components/Финализация 5.png';
import beanSceneCoffee from '../components/bean_scene_coffee_landingpage.png';
import dekstop from '../components/Dekstop.png';
import desktopOne from '../components/Desktop - 1.png';
import desktopKids from '../components/Desktop - kids.png';
import homePreview from '../components/Home.png';
import interiorDesign from '../components/Interior design.png';

export function HomePage() {
  const [projectSlide, setProjectSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const projects = [
    {
      title: 'AirCalling Landing',
      category: 'Web Design',
      images: [homePreview, desktopKids, finalizationFive],
    },
    {
      title: 'Interior Studio',
      category: 'UI/UX',
      images: [desktopOne, interiorDesign],
    },
    {
      title: 'Coffee Landing',
      category: 'Web Design',
      images: [beanSceneCoffee, dekstop],
    },
  ];

  const filteredProjects = projects;

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
      <main>
        <section id="home">
          <Welcome />
        </section>

        <section id="about">
          <Container size="lg" py="xl">
            <Grid align="center" gutter="xl">
              <Grid.Col span={{ base: 12, md: 5 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={aboutPhoto}
                    alt="About me"
                    style={{
                      width: 260,
                      height: 260,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '6px solid var(--mantine-color-orange-6)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                    }}
                  />
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Title order={2}>About Me</Title>
                <Text c="dimmed" mt="sm">
                  I craft interfaces that feel light, clear, and purposeful. From concept to delivery, I focus on
                  usability, speed, and a polished visual finish.
                </Text>
                <Stack mt="lg" gap="sm">
                  <div>
                    <Text size="sm" fw={600} mb={6}>
                      UX
                    </Text>
                    <Progress value={85} color="orange" radius="xl" />
                  </div>
                  <div>
                    <Text size="sm" fw={600} mb={6}>
                      Website Design
                    </Text>
                    <Progress value={90} color="orange" radius="xl" />
                  </div>
                  <div>
                    <Text size="sm" fw={600} mb={6}>
                      App Design
                    </Text>
                    <Progress value={80} color="orange" radius="xl" />
                  </div>
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
        </section>

        <section id="services" style={{ background: 'var(--mantine-color-default-hover)' }}>
          <Container size="lg" py="xl">
            <Stack gap="xs" align="center">
              <Title order={2}>Services</Title>
              <Text c="dimmed" ta="center" maw={520}>
                Clean design systems, fast delivery, and pixel-level care for your next product.
              </Text>
            </Stack>
            <Grid gutter="lg" mt="xl" justify="center">
              {[
                { title: 'UI/UX', icon: IconLayoutGrid },
                { title: 'Web Design', icon: IconDeviceLaptop },
                { title: 'App Design', icon: IconPalette },
              ].map((service) => (
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={service.title} style={{ display: 'flex' }}>
                  <Card
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{ width: '100%', maxWidth: 260, margin: '0 auto' }}
                  >
                    <Stack align="center" gap="xs">
                      <service.icon size={28} color="var(--mantine-color-orange-6)" />
                      <Text fw={600}>{service.title}</Text>
                      <Text size="sm" c="dimmed" ta="center">
                        Focused on clarity, speed, and visual consistency.
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </section>

        <section id="projects">
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
            <Container size="lg" py="xl">
              <Stack gap="xs" align="center">
                <Title order={2}>My Projects</Title>
                <Text c="dimmed" ta="center" maw={520}>
                  A curated selection of recent landing pages and product concepts.
                </Text>
              </Stack>
            <Grid gutter="xl" mt="xl">
              {filteredProjects.map((project) => (
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={project.title}>
                  <Stack gap="xs">
                    <ProjectCard project={project} activeIndex={projectSlide} direction={slideDirection} />
                    <Text fw={600}>{project.title}</Text>
                  </Stack>
                </Grid.Col>
              ))}
            </Grid>
            </Container>
          </div>
        </section>

        <section id="contact">
          <Container size="sm" py="xl">
            <Stack justify="xl" align="center">
              <Title order={2}>Lets Design Together</Title>
              <Text ta="center" c="dimmed">
                Tell me about your project and I will respond with a clear plan and timeline.
              </Text>
              <Group w="100%" gap="sm" align="center">
                <TextInput placeholder="Enter your email" style={{ flex: 1 }} radius="xl" />
                <Button color="orange" radius="xl">
                  Contact Me
                </Button>
              </Group>

              <Group justify="center" mt="md">
                <Anchor href="mailto:itsstephanied78@gmail.com" target="_blank" rel="noopener noreferrer" underline="never">
                  <Button variant="outline" color="orange" size="md" leftSection={<IconMail size={20} />}>
                    Email
                  </Button>
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/in/stephanie-dimitrova-b97483194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="never"
                >
                  <Button variant="outline" color="orange" size="md" leftSection={<IconBrandLinkedin size={20} />}>
                    LinkedIn
                  </Button>
                </Anchor>
              </Group>
            </Stack>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
