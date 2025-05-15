import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
    <HeaderSimple/>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
