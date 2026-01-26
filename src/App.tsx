import '@mantine/core/styles.css';

import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { LanguageProvider } from './i18n';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'color-scheme' });

export default function App() {
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="light"
    >
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </MantineProvider>
  );
}
