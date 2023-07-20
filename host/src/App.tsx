import { useEffect } from 'react';
import { AppFromChild, testFunction } from 'app/components';

export const App = () => {
  useEffect(() => {
    const worker = new Worker(new URL('./worker.ts', import.meta.url));
    // testFunction();
  }, []);
  return (
    <>
      <AppFromChild />
      <div>hello, i am host</div>
    </>
  );
};
