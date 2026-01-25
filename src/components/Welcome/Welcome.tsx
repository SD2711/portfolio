import { ActionIcon, Container, Grid, Group, Image, Text, Title, Button } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import profile from './stefani.jpg'; // смени пътя ако е нужно

export default function Welcome() {
  return (
    <Container size="xl" py="xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Grid align="center" gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text size="sm" fw={600} c="dimmed">
              Hi I am
            </Text>
            <Text size="lg" fw={600} c="orange">
              Stefani Dimitrova
            </Text>
            <Title order={1} size="3rem" lh={1.1} mt="sm">
              UI & UX
              <br />
              Designer
            </Title>
            <Text mt="md" c="dimmed" maw={440}>
              I design modern, fast, and user-friendly websites that work beautifully on every device.
            </Text>
            <Button component="a" href="#contact" mt="lg" radius="xl" color="orange">
              Hire Me
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
              <ActionIcon variant="subtle" color="orange" aria-label="Facebook">
                <IconBrandFacebook size={18} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="orange" aria-label="Twitter">
                <IconBrandTwitter size={18} />
              </ActionIcon>
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
