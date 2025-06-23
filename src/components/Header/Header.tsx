import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Container, Group, Burger } from '@mantine/core';
import classes from './Header.module.css'; // Примерен CSS модул
import logo from './logo.svg'; // Примерен импорт на лого

const links = [
  { link: '/', label: 'About me' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="ml" className={classes.inner}>
        <img src={logo} alt="Логотип" height={70} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
