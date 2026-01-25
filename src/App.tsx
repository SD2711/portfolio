import '@mantine/core/styles.css';

import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'color-scheme' });

export default function App() {
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="light"
    >
      <Router />
    </MantineProvider>
  );
}
