import React from 'react';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import '../styles/index.css';

const inter = Inter({ subsets: ["latin"] });

import SideBar from '@/components/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={inter.className}>
            <SideBar />
            <div className="w-[calc(100vw_-_288px)] ml-auto">
                <div className="px-10 bg-blue-gray-50 min-h-screen">
                    <Component {...pageProps} />
                </div>
            </div>
        </main>
    )
}
