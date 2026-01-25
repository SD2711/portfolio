import { Container, Group, Text, Anchor, ActionIcon } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';

export function Footer() {
  return (
    <footer
      style={{
        background:
          'linear-gradient(135deg, var(--mantine-color-dark-9), color-mix(in srgb, var(--mantine-color-orange-6) 18%, var(--mantine-color-dark-9)))',
        color: 'var(--mantine-color-gray-0)',
        padding: '2rem 0',
        marginTop: '4rem',
      }}
    >
      <Container
        size="lg"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}
      >
        <Text size="sm" style={{ marginBottom: '0.5rem' }}>
          © {new Date().getFullYear()} Stefani. All rights reserved.
        </Text>

        <Group justify="xs" style={{ marginLeft: 'auto' }}>
          <Anchor href="mailto:itsstephanied78@gmail.com" target="_blank" rel="noopener noreferrer" underline="never">
            <ActionIcon size="lg" color="orange" variant="filled" radius="xl" component="button" aria-label="Email">
              <IconMail size={20} />
            </ActionIcon>
          </Anchor>

          <Anchor
            href="https://www.linkedin.com/in/stephanie-dimitrova-b97483194/"
            target="_blank"
            rel="noopener noreferrer"
            color="white"
            underline="never"
          >
            <ActionIcon size="lg" color="orange" variant="filled" radius="xl" component="button" aria-label="LinkedIn">
              <IconBrandLinkedin size={20} />
            </ActionIcon>
          </Anchor>

          <Anchor href="https://github.com/SD2711" target="_blank" rel="noopener noreferrer" color="white" underline="never">
            <ActionIcon size="lg" color="orange" variant="filled" radius="xl" component="button" aria-label="GitHub">
              <IconBrandGithub size={20} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Container>
    </footer>
  );
}
