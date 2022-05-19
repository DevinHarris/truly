import Link from 'next/link';
import Layout from '@/components/Layout'

export default function _404() {

    return (
        <div>
            <h1>Sorry, but that page wasn't found!</h1>
            <Link href="/">Return to the Home</Link>
        </div>
    )
}