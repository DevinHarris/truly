import useSWR from 'swr';
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { FiLink } from 'react-icons/fi'
import Button from '@/components/Button';
import styles from '@/styles/LinkInput.module.css'
import linkStyles from '@/styles/LinkData.module.css';

export default function LinkInput() {

    const [urlData, setUrlData] = useState(null);
    const [pageTitle, setPageTitle] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        let dataToSend = {
            originalUrl: data.url
        }
        axios.post('https://t-ruly.herokuapp.com/add', dataToSend).then(res => {
            setUrlData(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        }) 
    };

    const handleInput = (url) => {
        console.log(url);
        const params = { url } 
        axios.get('http://localhost:5000/app/info', {
            params
        }).then(res => setPageTitle(res.data)).catch(err => console.log(err));
    }

    const handleLinkCopy = () => {
        navigator.clipboard.writeText(`https://t-ruly.herokuapp.com/${urlData.shortId}`);

    }

    return (
        <div className={styles.inputContainer}>
            <FiLink className={styles.linkIcon} size={15} color="#9f9f9f" />
            <form onSubmit={handleSubmit(onSubmit)}>
                 <input className={styles.input} onInput={(e) => handleInput(e.target.value)} placeholder="Paste your link here!" {...register('url')} />
                <Button text="Create Link"  className={styles.inputBtn} />
            </form>
            <div className={linkStyles.linkMeta}>
                {
                    pageTitle.title ? <h2>Title: <span className={linkStyles.pageTitle}>{pageTitle.title}</span></h2> : null
                }

                {
                    urlData ? <div className={linkStyles.linkData}>
                        <a href={`https://t-ruly.herokuapp.com/${urlData.shortId}`} target="_blank">Here's your new link!</a>
                        <button className={linkStyles.copyBtn} onClick={handleLinkCopy}>Copy Link</button>
                    </div> : null
                }
            </div>
        </div>
    )
}
