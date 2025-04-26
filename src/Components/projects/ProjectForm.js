import styles from './ProjectForm.module.css';
import Input from '../Forms/Input';

export default function ProjectForm(){
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
            <div>
                <select name="category_id">
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>
        </form>
    )
}
