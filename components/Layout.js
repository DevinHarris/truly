import Head from 'next/head';
import Nav from '@/components/Nav'

export default function Layout({ title, children }) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <link rel="icon" href="/image/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

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