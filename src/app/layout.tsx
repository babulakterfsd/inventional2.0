import 'aos/dist/aos.css';
import '../styles/globals.css';

export const metadata = {
  title: 'Inventional - The future is here.',
  description:
    'Inventional is an AI that is going to change the world. Join us on our journey to the future. Join in the waitlist now.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
