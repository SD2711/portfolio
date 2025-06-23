// components/ProjectCard.tsx
import { Card, Image, Text, Badge, Button, Group, ActionIcon } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  github: string;
};

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Card shadow="md" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={project.image} height={160} alt={project.title} />
        </Card.Section>

        <Text fw={500} size="lg" mt="md">{project.title}</Text>
        <Text size="sm" c="dimmed" mt="xs">{project.description}</Text>

        <Group mt="md" gap="xs">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </Group>

        <Group mt="md" justify="space-between">
          <Button component="a" href={project.demo} target="_blank" variant="light" size="xs">
            Live Demo
          </Button>
          <ActionIcon component="a" href={project.github} target="_blank" variant="default" size="sm">
            <IconBrandGithub size={18} />
          </ActionIcon>
        </Group>
      </Card>
    </motion.div>
  );
};
