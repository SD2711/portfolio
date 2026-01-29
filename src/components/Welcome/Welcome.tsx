import { ActionIcon, Container, Grid, Group, Image, Text, Title, Button } from '@mantine/core';
import { IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import profile from './stefani.jpg'; // смени пътя ако е нужно
import { useLanguage } from '../../i18n';

export default function Welcome() {
  const { t } = useLanguage();

  return (
    <Container size="lg" py="xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Grid align="center" gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text size="sm" fw={600} c="dimmed">
              {t.welcome.hi}
            </Text>
            <Text size="lg" fw={600} c="orange">
              {t.welcome.name}
            </Text>
            <Title order={1} size="3rem" lh={1.1} mt="sm">
              {t.welcome.role.split('\n').map((line, index) => (
                <span key={line}>
                  {line}
                  {index === 0 ? <br /> : null}
                </span>
              ))}
            </Title>
            <Text mt="md" c="dimmed" maw={440}>
              {t.welcome.intro}
            </Text>
            <Button component="a" href="#contact" mt="lg" radius="xl" color="orange">
              {t.welcome.hire}
            </Button>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={profile}
                alt="Stefani profile"
                radius="50%"
                style={{
                  width: 320,
                  height: 320,
                  objectFit: 'cover',
                  border: '6px solid var(--mantine-color-orange-6)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                }}
              />
            </div>
            <Group justify="center" mt="md">
              <ActionIcon variant="subtle" color="orange" aria-label="Instagram">
                <IconBrandInstagram size={18} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="orange" aria-label="LinkedIn">
                <IconBrandLinkedin size={18} />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </Grid>
      </motion.div>
    </Container>
  );
}
