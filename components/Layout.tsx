import React from 'react';
import Head from 'next/head'
import Link from 'next/link';

const Layout = ({title, children}:any) => {
    return (
        <>
        <Head>
        <title>{title? "Al-Maruf's-"+title:"Al-Maruf's Attar"}</title>
        <meta name="description" content="E-commerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='min-h-screen flex flex-col justify-between'>
            <header>
                <nav className='flex items-center h-12 px-6 justify-between shadow-md'>
                    <Link href="/">
                        <span className='text-lg font-bold'>Maruf's Attar</span>
                    </Link>
                    <div>
                        <Link href="/Cart" className='px-3 py-2'>Cart</Link>
                        <Link href="/Login" className='px-3 py-2'>Login</Link>
                    </div>
                </nav>
            </header>
            <main className='w-full m-auto mt-4 px-6'>
                {children}
            </main>
            <footer className='flex h-10 justify-center items-center shadow-inner'>
                Footer
            </footer>
        </div>
        </>
    );
};

export default Layout;