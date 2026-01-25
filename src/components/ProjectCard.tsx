// components/ProjectCard.tsx
import { Card, Image, Modal } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Project = {
  title: string;
  images: string[];
};

type Props = {
  project?: Project;
  projects?: Project;
  activeIndex?: number;
  direction?: number;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
};

export const ProjectCard = ({ project, projects, activeIndex = 0, direction = 1 }: Props) => {
  const [opened, setOpened] = useState(false);

  const resolvedProject = project ?? projects;
  if (!resolvedProject) {
    return null;
  }

  const totalImages = resolvedProject.images.length;
  const safeIndex = totalImages ? ((activeIndex % totalImages) + totalImages) % totalImages : 0;
  const currentImage = resolvedProject.images[safeIndex];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        withCloseButton={false}
        padding="md"
        zIndex={2000}
      >
        <Image src={currentImage} alt="Project preview" radius="md" />
      </Modal>
      <Card shadow="md" padding="lg" radius="md" withBorder>
        <Card.Section>
          <div style={{ overflow: 'hidden', height: 200 }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35 }}
              >
                <Image
                  src={currentImage}
                  height={200}
                  alt={resolvedProject.title}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOpened(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Card.Section>

      </Card>
    </motion.div>
  );
};
