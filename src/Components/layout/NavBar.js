import { Link } from "react-router-dom";
import { useState } from "react";

import styles from './NavBar.module.css';
import Logo from '../../IMG/costs_logo.png';

import Container from "./Container";
import { FaBars, FaTimes } from "react-icons/fa"

export default function NavBar(){

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu(){
        setMenuOpen(!menuOpen)
    }

    return(
        <nav className={styles.navbar}>
            <Container className={styles.navbarContainer}>
                <Link to='/'>
                    <img src={Logo} alt="Costs" />
                </Link>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {menuOpen ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={`${styles.list} ${menuOpen ? styles.active : ''}`}>
                    <li className={styles.item}>
                        <Link to="/" className={styles.links} onClick={() => setMenuOpen(false)}>Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects" className={styles.links} onClick={() => setMenuOpen(false)}>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company"  className={styles.links} onClick={() => setMenuOpen(false)}>Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato"  className={styles.links} onClick={() => setMenuOpen(false)}>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav> 
    )
}