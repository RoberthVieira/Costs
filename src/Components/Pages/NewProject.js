import ProjectForm from '../projects/ProjectForm';

import styles from './NewProjects.module.css';

export default function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adcionar os seus serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}