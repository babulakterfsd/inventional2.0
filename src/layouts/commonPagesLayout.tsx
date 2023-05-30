import { LayoutType } from '@/types/global.types';

export default function CommonPagesLayout({ children }: LayoutType) {
  return (
    <>
      <div className="main-container">{children}</div>
    </>
  );
}
