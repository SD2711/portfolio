import {Header}  from '@/components/Header/Header';
import  Welcome  from '../components/Welcome/Welcome';
import { Footer } from '@/components/Footer';

export function HomePage() {
  return (
    <>
    <Header/>
      <Welcome />
    <Footer/>
    </>
  );
}
