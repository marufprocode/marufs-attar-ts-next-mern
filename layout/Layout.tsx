import Head from 'next/head'
import Navbar from '../components/Navbar';

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
                <Navbar/>
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