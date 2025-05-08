import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import style from "./Projects.module.css";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkBtn from "../layout/LinkBtn";
import ProjectCard from "../projects/ProjectCard";
import Loading from "../layout/Loading";

export default function Projects({}){

    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState("");

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((erro) => {console.log(erro)})
        }, 300)
    }, [])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
        .then((data) => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(erro => console.log(erro))
    }

    return (
        <div className={style.project_container}>
            <div className={style.title_container}>
                <h1>Meus Projetos</h1>
                <LinkBtn text='Criar Projetos' to='/newproject'/>
            </div>
            {message && (<Message type='success' msg={message}/>)}
            {projectMessage && (<Message type='success' msg={projectMessage}/>)}
            <Container customClass='start'>
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard 
                            name={project.name} 
                            id={project.id}
                            budget={project.budget}
                            category={project.categories?.name}
                            key={project.id}
                            handleRemove={removeProject}
                            />
                    ))
                }
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}