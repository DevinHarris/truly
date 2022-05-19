import Head from 'next/head';
import Nav from '@/components/Nav'

export default function Layout({ title, children }) {

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Nav />
            <div>
                { children }
            </div>
            
        </>
    )
}

Layout.defaultProps = {
    title: 'Truly - Shorten URLs Free, Fast, and Privately.'
}