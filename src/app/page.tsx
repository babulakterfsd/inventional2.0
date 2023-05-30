'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to inventionalAI</h1>
      </div>
    </>
  );
}
