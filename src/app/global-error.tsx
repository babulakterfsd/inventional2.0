'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-black text-white h-screen flex justify-center items-center ">
        <div className="bg-[#1c2647] p-4 rounded-xl">
          <h2>Sorry User, Something went wrong !</h2>
          <Link href="/">
            <button className="gradientBackground p-2">Go Back</button>
          </Link>
        </div>
      </body>
    </html>
  );
}
