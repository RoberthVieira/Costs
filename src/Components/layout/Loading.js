import styles from './Loading.module.css';
import loading from '../../IMG/loading.svg';

export default function Loading(){
    return(
        <div className={styles.loaderContainer}>
            <img src={loading} alt="Loading" className={styles.loader}/>
        </div>
    )
}