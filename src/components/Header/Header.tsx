import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  ActionIcon,
  Burger,
  Button,
  Container,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import classes from './Header.module.css'; // Примерен CSS модул
import logo from './logo.svg'; // Примерен импорт на лого

const links = [
  { link: '#home', label: 'Home' },
  { link: '#about', label: 'About Me' },
  { link: '#services', label: 'Services' },
  { link: '#projects', label: 'Projects' },
  { link: '#testimonials', label: 'Testimonials' },
  { link: '#contact', label: 'Contact' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState('#home');
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  useEffect(() => {
    const updateActive = () => {
      setActive(window.location.hash || '#home');
    };
    updateActive();
    window.addEventListener('hashchange', updateActive);
    return () => window.removeEventListener('hashchange', updateActive);
  }, []);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => setActive(link.link)}
    >
      {link.label}
    </a>
  ));

  const toggleColorScheme = () =>
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');

  return (
    <header className={classes.header}>
      <Container size="ml" className={classes.inner}>
        <img src={logo} alt="Логотип" height={70} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Group gap="xs">
          <ActionIcon
            variant="light"
            color="orange"
            onClick={toggleColorScheme}
            aria-label="Toggle color scheme"
          >
            {computedColorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
          <Button component="a" href="#contact" variant="filled" color="orange" radius="xl" visibleFrom="sm">
            Download CV
          </Button>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>
    </header>
  );
}
