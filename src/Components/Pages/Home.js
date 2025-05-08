import styles from './Home.module.css';
import savings from '../../IMG/savings.svg';
import LinkBtn from '../layout/LinkBtn';

export default function Home(){
    return (
        <section className={styles.home_contaier}>
            <h1>
                Bem vindo ao <span>Costs</span>
            </h1>
            <p>Começe a genreciar os seus projetos agora mesmo!</p>
            <a href="/"><LinkBtn to='/newproject' text='Criar projeto'/></a>
            <img src={savings} alt="Costs"/>
        </section>
    )
}