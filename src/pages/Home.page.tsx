import { Header } from '@/components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import {
  Anchor,
  ActionIcon,
  Alert,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Progress,
  Stack,
  Text,
  TextInput,
  Textarea,
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
import aboutPhoto from '../components/stefani1.png';
import finalizationFive from '../components/Финализация 5.png';
import beanSceneCoffee from '../components/bean_scene_coffee_landingpage.png';
import dekstop from '../components/Dekstop.png';
import desktopOne from '../components/Desktop - 1.png';
import desktopKids from '../components/Desktop - kids.png';
import homePreview from '../components/Home.png';
import interiorDesign from '../components/Interior design.png';
import { useLanguage } from '../i18n';

export function HomePage() {
  const { t } = useLanguage();
  const [projectSlide, setProjectSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const projects = [
    {
      images: [homePreview, desktopKids, finalizationFive],
    },
    {
      images: [desktopOne, interiorDesign],
    },
    {
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

  const budgetOptions = t.contact.budgetOptions.map((option) => ({ value: option, label: option }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('sending');
    setSubmitMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitState('success');
        setSubmitMessage(t.contact.successMessage);
        form.reset();
        return;
      }

      const data = await response.json().catch(() => null);
      setSubmitState('error');
      setSubmitMessage(data?.message || t.contact.errorMessage);
    } catch (error) {
      setSubmitState('error');
      setSubmitMessage(t.contact.errorMessage);
    }
  };

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
                      width: 220,
                      height: 300,
                      borderRadius: '0%',
                      objectFit: 'fill',
                      border: '6px solid var(--mantine-color-orange-6)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                    }}
                  />
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Title order={2}>{t.about.title}</Title>
                <Text c="dimmed" mt="sm">
                  {t.about.text}
                </Text>
                <Text c="dimmed" mt="sm">
                  {t.about.techText}
                </Text>
                <Stack mt="lg" gap="sm">
                  {t.about.skills.map((skill) => (
                    <div key={skill.label}>
                      <Text size="sm" fw={600} mb={6}>
                        {skill.label}
                      </Text>
                      <Progress value={skill.value} color="orange" radius="xl" />
                    </div>
                  ))}
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
        </section>

        <section id="services" style={{ background: 'var(--mantine-color-default-hover)' }}>
          <Container size="lg" py="xl">
            <Stack gap="xs" align="center">
              <Title order={2}>{t.services.title}</Title>
              <Text c="dimmed" ta="center" maw={520}>
                {t.services.subtitle}
              </Text>
              <Text c="dimmed" ta="center" maw={520}>
                {t.services.techText}
              </Text>
            </Stack>
            <Grid gutter="lg" mt="xl" justify="center">
              {t.services.cards.map((service, index) => {
                const icons = [IconLayoutGrid, IconDeviceLaptop, IconPalette];
                const ServiceIcon = icons[index] ?? IconLayoutGrid;
                return (
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={service.title} style={{ display: 'flex' }}>
                  <Card
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{ width: '100%', maxWidth: 260, margin: '0 auto' }}
                  >
                    <Stack align="center" gap="xs">
                      <ServiceIcon size={28} color="var(--mantine-color-orange-6)" />
                      <Text fw={600}>{service.title}</Text>
                      <Text size="sm" c="dimmed" ta="center">
                        {service.description}
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              );
              })}
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
                <Title order={2}>{t.projects.title}</Title>
                <Text c="dimmed" ta="center" maw={520}>
                  {t.projects.subtitle}
                </Text>
              </Stack>
              <Grid gutter="xl" mt="xl">
                {filteredProjects.map((project) => (
                  <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Stack gap="xs">
                      <ProjectCard project={project} activeIndex={projectSlide} direction={slideDirection} />
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
              <Title order={2}>{t.contact.title}</Title>
              <Text ta="center" c="dimmed">
                {t.contact.text}
              </Text>
              <form
                style={{ width: '100%' }}
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="access_key" value="3ea08c46-3203-451e-918e-df27622af309" />
                <input type="hidden" name="subject" value="New message from portfolio site" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
                <Stack gap="sm">
                  <TextInput
                    name="name"
                    placeholder={t.contact.namePlaceholder}
                    radius="xl"
                    required
                    disabled={submitState === 'sending'}
                  />
                  <TextInput
                    type="email"
                    name="email"
                    placeholder={t.contact.emailPlaceholder}
                    radius="xl"
                    required
                    disabled={submitState === 'sending'}
                  />
                  <TextInput
                    type="tel"
                    name="phone"
                    placeholder={t.contact.phonePlaceholder}
                    radius="xl"
                    disabled={submitState === 'sending'}
                  />
                  <TextInput
                    name="budget"
                    placeholder={t.contact.budgetPlaceholder}
                    radius="xl"
                    disabled={submitState === 'sending'}
                    list="budget-options"
                    required
                  />
                  <datalist id="budget-options">
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value} />
                    ))}
                  </datalist>
                  <TextInput
                    name="timeline"
                    placeholder={t.contact.timelinePlaceholder}
                    radius="xl"
                    disabled={submitState === 'sending'}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder={t.contact.messagePlaceholder}
                    radius="md"
                    minRows={4}
                    required
                    disabled={submitState === 'sending'}
                  />
                  {submitState === 'success' && (
                    <Alert color="green" radius="md" title={t.contact.successTitle}>
                      {submitMessage}
                    </Alert>
                  )}
                  {submitState === 'error' && (
                    <Alert color="red" radius="md" title={t.contact.errorTitle}>
                      {submitMessage}
                    </Alert>
                  )}
                  <Button color="orange" radius="xl" type="submit" loading={submitState === 'sending'}>
                    {t.contact.contactCta}
                  </Button>
                </Stack>
              </form>

              <Group justify="center" mt="md">
                <Anchor href="mailto:itsstephanied78@gmail.com" target="_blank" rel="noopener noreferrer" underline="never">
                  <Button variant="outline" color="orange" size="md" leftSection={<IconMail size={20} />}>
                    {t.contact.emailButton}
                  </Button>
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/in/stephanie-dimitrova-b97483194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="never"
                >
                  <Button variant="outline" color="orange" size="md" leftSection={<IconBrandLinkedin size={20} />}>
                    {t.contact.linkedinButton}
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
