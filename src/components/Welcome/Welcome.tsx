import { Container, Title, Text, Button, Group, Image, Stack } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profile from './stefani.jpg'; // смени пътя ако е нужно
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <Container
      size="xl"
      py="xl"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {/* LEFT: Profile image */}
        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <Image
            src={profile}
            alt="Stefani profile"
            radius="lg"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        {/* RIGHT: Typing text content */}
        <Stack justify="md" style={{ flex: '1 1 400px', minWidth: '300px' }}>
          <Title order={1} size="h1" style={{ color: '#1f2937' }}>
            <Typewriter
              words={["Hi, I'm Stefani", 'Web Designer & Front-End Developer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </Title>

          <Text size="md" style={{ lineHeight: 1.7 }}>
            I hold a degree in <strong>Software Engineering</strong> from <strong>Baltic State Technical University "VOENMEH"</strong> in Saint Petersburg.
            My passion for technology is matched by my dedication to performance and discipline as a competitive <strong>Acrobatic Rock’n’Roll</strong> dancer.
            In my downtime, I love to explore new ideas through reading and continuous learning.
          </Text>

          <Group mt="md">
            <Link to='/projects' style={{ textDecoration: 'none' }}><Button variant="filled" color="indigo" radius="xl" size="md" rightSection={<IconArrowRight size={18} />}>
              View Projects
            </Button>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}><Button variant="outline" color="blue" radius="xl" size="md">
              Contact Me
            </Button>
            </Link>
          </Group>
        </Stack>
      </motion.div>
    </Container>
  );
}
