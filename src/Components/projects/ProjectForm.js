import styles from './ProjectForm.module.css';
import Input from '../Forms/Input';
import Select from '../Forms/Select';
import SubmitButton from '../Forms/SubmitButton';

export default function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input 
                name='name' 
                type='text' 
                text='Nome do projeto' 
                placeholder='Insira o nome do projeto'
            />
            <Input
                name='budget'
                text='Orçamento do projeto' 
                type='number'
                placeholder='Insira o orçamento total'

            />
            <Select
                name="category_id"
                text="Selecione a categoria"
            />
            <SubmitButton 
                text={btnText}
            />
        </form>
    )
}
