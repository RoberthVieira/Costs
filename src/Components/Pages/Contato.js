import styles from './Contato.module.css';

export default function Contato(){
    return(
        <div className={styles.contact}>
            <h1>Contato</h1>
            <p>
                Tem alguma dúvida, sugestão ou precisa de ajuda com o uso do <strong>Costs</strong>? Nossa equipe está pronta para ouvir você!
            </p>
            <p>
                Valorizamos a comunicação transparente e estamos sempre abertos a feedbacks que nos ajudem a melhorar. 
                Seja você um usuário experiente ou alguém que está conhecendo nossa ferramenta agora, ficaremos felizes em conversar.
            </p>
            <p>
                Entre em contato através dos canais abaixo e responderemos o mais breve possível:
            </p>
            <ul>
                <li><strong>Email:</strong> suporte@costsapp.com</li>
                <li><strong>Telefone:</strong> (34) 1234-5678</li>
                <li><strong>WhatsApp:</strong> (34) 91234-5678</li>
                <li><strong>Endereço:</strong> Rua da Inovação, 123 – Uberlândia, MG</li>
            </ul>
            <p>
                Também estamos presentes nas redes sociais. Siga-nos para acompanhar novidades, atualizações e conteúdos exclusivos sobre gestão de projetos!
            </p>
        </div>
    )
}