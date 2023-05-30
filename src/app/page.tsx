'use client';
import Desktop from '@/components/ui/Desktop';
import Mobile from '@/components/ui/Mobile';
import Tablet from '@/components/ui/Tablet';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Mobile />
      <Tablet />
      <Desktop />
    </>
  );
}
