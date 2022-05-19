import styles from '@/styles/Button.module.css'

export default function Button({ text, className }) {

    return (
        <button className={styles.btn}>
            {text}
        </button>
    )
}