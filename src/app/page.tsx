'use client';
import Banner from '@/components/ui/Banner';
import Contact from '@/components/ui/Contact';
import Features from '@/components/ui/Features';
import Footer from '@/components/ui/Footer';
import Possibilities from '@/components/ui/Possibilities';
import StepToFuture from '@/components/ui/StepToFuture';
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
      <StepToFuture />
      <Contact />
      <Footer />
    </>
  );
}
