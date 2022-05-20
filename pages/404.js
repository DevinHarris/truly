import Link from 'next/link';
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

export default function _404() {

    return (
        <Layout>
            <div className={styles.notFoundPage}>
                <h1>Sorry, but that page wasn't found!</h1>
                <Link href="/">Return to the Home</Link>
            </div>
        </Layout>
    )
}