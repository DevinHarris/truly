import Layout from '@/components/Layout';
import styles from '@/styles/About.module.css';

export default function AboutPage() {

    return (
        <Layout>
            <div className={styles.aboutPage}>
                <div className={styles.aboutHeader}>
                    <h1>About Truly.</h1>
                    <p>Truly allows you to quickly shorten your links. Create new links, track clicks, data and other helpful information.</p>
                </div>
            </div>
        </Layout>
    )
}