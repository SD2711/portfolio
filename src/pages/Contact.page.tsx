import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer';
import { Stack, Title, Group, Anchor, Button, Text } from '@mantine/core';
import { IconMail, IconBrandLinkedin } from '@tabler/icons-react';
import { Container } from '@mantine/core';

export function Contact() {
  return (
    <>
      <Header />
      <Container size="sm" py="xl">
        <Stack justify="xl" align="center">
          <Title order={2}>
            Свържете се с мен
          </Title>
          <Text>
            Можете да ме намерите на имейл или LinkedIn. Ще се радвам да си поговорим!
          </Text>

          <Group justify="xl">
            <Anchor href="mailto:itsstephanied78@gmail.com" target="_blank" rel="noopener noreferrer" underline='never'>
              <Button variant="outline" color="blue" size="md">
                <IconMail size={20} />
                Имейл
              </Button>
            </Anchor>

            <Anchor href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" underline='never'>
              <Button variant="outline" color="blue" size="md">
                <IconBrandLinkedin size={20} />
                LinkedIn
              </Button>
            </Anchor>
          </Group>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
