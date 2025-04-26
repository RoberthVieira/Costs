import { Link } from 'react-router-dom'
import styles from './LinkBtn.module.css'

export default function LinkBtn({to, text}){
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}