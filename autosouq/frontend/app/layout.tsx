import React from 'react';
import './globals.css';
import { LanguageSwitcher } from './components/LanguageSwitcher';

export const metadata = {
  title: 'AutoSouq',
  description: 'Libyan Car Parts Marketplace'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="ar" dir="rtl">
      <body>
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <h1 className="font-bold text-xl">AutoSouq</h1>
          <LanguageSwitcher />
        </header>
        <div className="p-4 max-w-5xl mx-auto">{children}</div>
    <script defer src="/sw-register.js" />
      </body>
    </html>
  );
}
