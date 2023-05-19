import loading from './../img/loading.svg'

import styles from './Loading.module.css'

export default function Loading() {
    return (
        <div className={styles.loader.container}>
            <img src={loading} alt="loading"/>
        </div>
    )
}