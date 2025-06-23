import { Container, Group, Text, Anchor, ActionIcon } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '2rem 0', marginTop: '4rem' }}>
      <Container size="lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <Text size="sm" style={{ marginBottom: '0.5rem' }}>
          © {new Date().getFullYear()} Stefani. All rights reserved.
        </Text>

        <Group justify="xs"  style={{ marginLeft: 'auto' }}>
          <Anchor href="mailto:your.email@example.com" color="white" underline='never'>
            <ActionIcon size="lg" color="blue" variant="filled" radius="xl" component="button" aria-label="Email">
              <IconMail size={20} />
            </ActionIcon>
          </Anchor>

          <Anchor href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" color="white" underline='never'>
            <ActionIcon size="lg" color="blue" variant="filled" radius="xl" component="button" aria-label="LinkedIn">
              <IconBrandLinkedin size={20} />
            </ActionIcon>
          </Anchor>

          <Anchor href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" color="white" underline='never'>
            <ActionIcon size="lg" color="blue" variant="filled" radius="xl" component="button" aria-label="GitHub">
              <IconBrandGithub size={20} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Container>
    </footer>
  );
}
