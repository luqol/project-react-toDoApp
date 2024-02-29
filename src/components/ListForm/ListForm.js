import styles from './ListForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () =>{
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch( addList({title, description}) );
    setTitle('');
    setDescription('');
  };

  return(
    <form className={styles.listForm} onSubmit={handleSubmit} >
        <label>Title:</label>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <label>Description:</label>
        <TextInput value={description} onChange={e => setDescription(e.target.value)} />
        <Button>Add List</Button>
    </form>
  );
};

export default ListForm;