import {Header}  from '@/components/Header/Header';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
    <Header/>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
