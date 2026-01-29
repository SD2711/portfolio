import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  ActionIcon,
  Burger,
  Button,
  Container,
  Group,
  Menu,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import classes from './Header.module.css'; // Примерен CSS модул
import logo from './stefani-dimitrova-logo-transparent.svg'; // Примерен импорт на лого
import { LANGUAGES, useLanguage } from '../../i18n';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState('#home');
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const updateActive = () => {
      setActive(window.location.hash || '#home');
    };
    updateActive();
    window.addEventListener('hashchange', updateActive);
    return () => window.removeEventListener('hashchange', updateActive);
  }, []);

  const items = t.header.links.map((link) => (
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

  const activeLanguage = LANGUAGES.find((lang) => lang.code === language) ?? LANGUAGES[0];

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.logoWrap}>
          <img src={logo} alt="Логотип" className={classes.logo} />
        </div>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Group gap="xs">
          <ActionIcon
            variant="light"
            color="orange"
            onClick={toggleColorScheme}
            aria-label={t.header.toggleTheme}
          >
            {computedColorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
          <Menu width={190} position="bottom-end" zIndex={2000}>
            <Menu.Target>
              <Button
                variant="light"
                color="orange"
                radius="xl"
                size="sm"
                aria-label={t.header.language}
                className={classes.languageButton}
              >
                <Text span className={classes.flag}>
                  {activeLanguage.flag}
                </Text>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {LANGUAGES.map((lang) => (
                <Menu.Item key={lang.code} onClick={() => setLanguage(lang.code)}>
                  <span className={classes.flag}>{lang.flag}</span> {lang.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
          <Button
            component="a"
            href="/myCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="filled"
            color="orange"
            radius="xl"
            visibleFrom="sm"
          >
            {t.header.downloadCv}
          </Button>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>
    </header>
  );
}
