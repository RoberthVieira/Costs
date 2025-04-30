import { useNavigate } from 'react-router-dom';
import ProjectForm from '../projects/ProjectForm';

import styles from './NewProjects.module.css';

export default function NewProject(){

    const navigate = useNavigate();

    function createPost(project){
        //initialize costs and services

        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })  
            .then((resposta => resposta.json()))
            .then((data) => {
                console.log(data)
                navigate('/projects', {message: "Projeto criado com sucesso!"})
            })
            .catch(erro => {console.log(erro)})
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adcionar os seus serviços</p>
            <ProjectForm btnText="Criar Projeto" handleSubmit={createPost}/>
        </div>
    )
}