import styles from './Footer.module.css';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li>
                    <FaFacebook className={styles.socialIcon} size={28}/>
                </li>
                <li>
                    <FaInstagram className={styles.socialIcon} size={28}/>
                </li>
                <li>
                    <FaLinkedin className={styles.socialIcon} size={28}/>
                </li>
            </ul>
            <p className={styles.bold}>Costs<span>&copy; 2025</span></p>
        </footer>
    )
}