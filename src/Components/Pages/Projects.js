import { useLocation } from "react-router-dom";

import style from "./Projects.module.css";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkBtn from "../layout/LinkBtn";

export default function Projects({}){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return (
        <div className={style.project_container}>
            <div className={style.title_container}>
                <h1>Meus Projetos</h1>
                <LinkBtn text='Criar Projetos' to='/newproject'/>
            </div>
            {message && (<Message type='success' msg={message}/>)}
            <Container customClass='start'>
                <p>Projetos...</p>
            </Container>
        </div>
    )
}