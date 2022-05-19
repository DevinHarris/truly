import Head from 'next/head'
import Layout from '@/components/Layout'
import LinkInput from "@/components/LinkInput"
// import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div>
        <Layout>
            <div className={styles.home}>
              <div className={styles.homeSide}>
                <h1 className={styles.tagline}>Truly shorten your links.<br></br>Fast, free, and easy.</h1>
                <p className={styles.description}>Truly allows you to quickly shorten your links. Create new links, track clicks, data and other helpful information.</p>
                <LinkInput />
              </div>
            </div>
        </Layout>
      </div>
    </div>
  )
}
