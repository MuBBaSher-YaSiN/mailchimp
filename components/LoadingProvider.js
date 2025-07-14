'use client'

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from './Loader.js';

export default function LoadingProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeout;

    const start = () => {
      setLoading(true);
    };

    const end = () => {
      timeout = setTimeout(() => {
        setLoading(false);
      }, 1000); // ✅ increase time to 1 second
    };

    // Listen to push state events
    const handleRouteChangeStart = () => start();
    const handleRouteChangeComplete = () => end();

    window.addEventListener('beforeunload', handleRouteChangeStart);
    router.events?.on?.('routeChangeStart', handleRouteChangeStart);
    router.events?.on?.('routeChangeComplete', handleRouteChangeComplete);
    router.events?.on?.('routeChangeError', handleRouteChangeComplete);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      router.events?.off?.('routeChangeStart', handleRouteChangeStart);
      router.events?.off?.('routeChangeComplete', handleRouteChangeComplete);
      router.events?.off?.('routeChangeError', handleRouteChangeComplete);
    };
  }, [pathname, router]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
