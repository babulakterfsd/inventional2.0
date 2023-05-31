'use client';
import Banner from '@/components/ui/Banner';
import Features from '@/components/ui/Features';
import Possibilities from '@/components/ui/Possibilities';
import Voice from '@/components/ui/Voice';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Banner />
      <Possibilities />
      <Voice />
      <Features />
    </>
  );
}
