// components/ProjectCard.tsx
import { Card, Image, Modal } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Project = {
  title?: string;
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
  const [isHovered, setIsHovered] = useState(false);

  const resolvedProject = project ?? projects;
  if (!resolvedProject) {
    return null;
  }

  const totalImages = resolvedProject.images.length;
  const safeIndex = totalImages ? ((activeIndex % totalImages) + totalImages) % totalImages : 0;
  const currentImage = resolvedProject.images[safeIndex];
  const imageAlt = resolvedProject.title ?? 'Project preview';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 16px 32px rgba(0,0,0,0.14)' : '0 8px 20px rgba(0,0,0,0.08)',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        borderRadius: 12,
      }}
    >
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        withCloseButton={false}
        padding="md"
        zIndex={2000}
      >
        <Image src={currentImage} alt={imageAlt} radius="md" />
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
                  alt={imageAlt}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOpened(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Card.Section>

      </Card>
    </div>
  );
};
