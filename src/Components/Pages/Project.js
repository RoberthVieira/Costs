import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([]);

    useEffect(() => {
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
    })

    return(
        <p>{project.name}</p>
    )
}