import { Link } from "react-router-dom";

import styles from './NavBar.module.css';
import Logo from '../../IMG/costs_logo.png';

import Container from "./Container";

export default function NavBar(){
    return(
        <nav className={styles.navbar}>
            <Container className={styles.navbarContainer}>
                <Link to='/'>
                    <img src={Logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/" className={styles.links}>Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects" className={styles.links}>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company"  className={styles.links}>Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato"  className={styles.links}>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav> 
    )
}