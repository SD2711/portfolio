
import { Container, Title, Text, Button, Group, Grid, Card, Badge, Stack, Space } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';

export default function Welcome() {
  return (
  <><Container size="lg" py='xs' h={1000} style={{ backgroundColor: 'white', color: '#1f2937', minHeight: '5vh' }}>
      {/* HERO Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title order={1} size="h1" style={{ color: '#6366f1' }}>
          Здравей, аз съм [Твоето име]
        </Title>
        <Text size="xl" mt="sm">
          Web дизайнер и разработчик с фокус върху UI/UX и съвременни технологии.
        </Text>
        <Group mt="xl">
          <Button variant="filled" color="indigo" radius="xl" size="md" rightSection={<IconArrowRight size={18} />}>
            Виж проектите ми
          </Button>
          <Button variant="outline" color="blue" radius="xl" size="md">
            Свържи се с мен
          </Button>
        </Group>
      </motion.div>

      {/* ABOUT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ marginTop: '5rem' }}
      >
        <Title order={2} mb="sm">За мен</Title>
        <Text>
          Имам опит с TypeScript, React и Mantine. Обичам да създавам красиви и функционални потребителски интерфейси, комбинирайки дизайн и код.
        </Text>
      </motion.div>

      {/* SKILLS */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginTop: '4rem' }}
      >
        <Title order={2} mb="sm">Технологии</Title>
        <Group h="xs">
          {['TypeScript', 'React', 'Mantine', 'Framer Motion', 'Figma'].map((tech) => (
            <Badge color="blue" size="lg" variant="outline" radius="md" key={tech}>
              {tech}
            </Badge>
          ))}
        </Group>
      </motion.div>

      {/* PROJECTS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.7 }}
        style={{ marginTop: '4rem' }}
      >
        <Title order={2} mb="sm">Проекти</Title>
        <Grid>
          {[1, 2, 3].map((index) => (
            <Grid.Col span={4} key={index}>
              <Card shadow="sm" padding="lg" radius="md" withBorder bg="#ffffff">
                <Title order={4} style={{ color: '#0ea5e9' }}>Проект {index}</Title>
                <Text mt="sm">Описание на проекта и използвани технологии.</Text>
                <Button variant="subtle" mt="md" fullWidth color="blue">
                  Виж повече
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </motion.div>

      {/* CONTACT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
        style={{ marginTop: '5rem', textAlign: 'center' }}
      >
        <Title order={2}>Искаш да работим заедно?</Title>
        <Text mt="sm">Свържи се с мен и нека създадем нещо страхотно!</Text>
        <Button mt="md" size="lg" color="indigo" radius="xl">
          Контакт
        </Button>
      </motion.div>
    </Container></>
  );
}
