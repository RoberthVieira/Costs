import { useState, useEffect } from 'react';

import styles from './ProjectForm.module.css';
import Input from '../Forms/Input';
import Select from '../Forms/Select';
import SubmitButton from '../Forms/SubmitButton';

export default function ProjectForm({btnText, handleSubmit, projectData}){

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resposta) => resposta.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((erro) => console.log(erro))
    }, [])

    const submit = (e) => {
        e.preventDefault();
        //console.log(project)
        handleSubmit(project);
    }

    function handleOnChange(e){
        setProject((prevProject) =>({ ... prevProject, [e.target.name]: e.target.value}));
    }

    function handleCategory(e){
        setProject({...project, categories: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })
    }

    return(
        <form className={styles.form} onSubmit={submit}>
            <Input 
                name='name' 
                type='text' 
                text='Nome do projeto' 
                placeholder='Insira o nome do projeto'
                handleOnChange={handleOnChange}
                value={project.name ? project.name : ''}
            />
            <Input
                name='budget'
                text='Orçamento do projeto' 
                type='number'
                placeholder='Insira o orçamento total'
                handleOnChange={handleOnChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.categories ? project.categories.id : ""}
            />
            <SubmitButton 
                text={btnText}
            />
        </form>
    )
}
