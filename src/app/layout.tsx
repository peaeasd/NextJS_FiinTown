"use client";
import '@/src/styles/globals.css';
import { ReactNode } from 'react';
import { useState , useEffect } from 'react';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import Sidebar from '../components/layout/Sidebar'; 
export default function RootLayout({ children }: { children: ReactNode }) {
  const [url, setUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href); 
    }
  }, []);
  const showSidebar = !url.includes('/charts/');
  return (
    <html lang="en">
      <head>
        <title>Financial Stock App</title>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script> 
      </head>
      <body>
          <Header />
            {showSidebar ? (
            <>
              <Sidebar />
              <main className="bg-background pt-[80px] pl-[56px]">
                {children}
              </main>
            </>
            ) : (
            <div className="bg-background pt-[60px]" style={{ minHeight: 'calc(-56px + 100vh)' }}>
              {children}
            </div>
            )}
          <Footer />
      </body>
    </html>
  );
}
