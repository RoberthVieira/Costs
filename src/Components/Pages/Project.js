import styles from './Project.module.css';
import {parse, v4 as uuidv4} from 'uuid'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../projects/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../service/ServiceForm';

export default function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [showServiceForm, setShowServiceForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(resposta => resposta.json())
            .then((data) => {
                setProject(data)
            })
            .catch(erro => console.log(erro))
        },400)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function createService(project){
        const lastServices = project.services[project.services.length - 1];

        lastServices.id = uuidv4();

        const lastServiceCost = lastServices.cost;

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        if(newCost > parseFloat(project.budget)){
            setMessage("Orçamento ultrapassado, verifique o valor do serviço!")
            setMessageType('error')
            project.services.pop()
            return false
        }

        project.cost = newCost

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((resposta) => resposta.json())
        .then((data) => {
            console.log(data)
        })
        .catch(erro => console.log(erro))
    }

    function editPost(project){
        setMessage('')
        
        if(project.budget < project.cost){
            setMessage("O orçamento não pode ser menor que o custo do projeto!")
            setMessageType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(resposta => resposta.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto Atualizado')
            setMessageType('success')
        })
        .catch(erro => console.log(erro))
    }

    return(
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        {message && <Message type={messageType} msg={message}/>}
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p>
                                        <span>Categoria:</span> {project.categories.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <ProjectForm btnText="Concluir Edição" handleSubmit={editPost} projectData={project}/>
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço</h2>
                            <button onClick={toggleServiceForm} className={styles.btn}>
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>
                            <div className={styles.projectInfo}>
                                {showServiceForm && (
                                    <ServiceForm
                                        handleSubmit={createService}
                                        textBtn="Adicionar Serviço"
                                        projectData={project}
                                    />
                                )}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass='start'>
                            <p>Itens de Serviços</p>
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading/>
            )}
        </>
    )
}