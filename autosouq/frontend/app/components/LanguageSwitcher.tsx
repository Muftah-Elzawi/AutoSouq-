"use client";
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const locales = ['ar', 'en'] as const;

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const current = pathname.split('/')[1];
  const isLocale = (val: string): val is typeof locales[number] => (locales as readonly string[]).includes(val);
  const base = isLocale(current) ? pathname.split('/').slice(2).join('/') : pathname.replace(/^\//, '');

  const switchTo = (loc: string) => {
    router.push(`/${loc}/${base}`.replace(/\/$/, ''));
  };

  return (
    <div className="flex gap-2 text-sm">
  {locales.map(l => (
        <button
          key={l}
            onClick={() => switchTo(l)}
            className={`px-2 py-1 rounded border ${current === l ? 'bg-slate-800 text-white' : 'bg-white'}`}
        >
          {l === 'ar' ? 'العربية' : 'EN'}
        </button>
      ))}
    </div>
  );
}
