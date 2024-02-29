import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllCollumns } from '../../redux/columnsRedux';
import { getListByID } from '../../redux/listsRedux';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';

const List = () => {

  const { listId } = useParams();

  const listData = useSelector(state => getListByID(state, listId));
  
  const columns = useSelector(state => getAllCollumns(state, listId));
  //consologle.('getallcollumns');

  
  if(!listData) return <Navigate to="/" />
  return (
    <div className={styles.list}>
      <header className={styles.header}>
          <h2 className={styles.title} >{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
      {columns.map(column => 
      <Column key={column.id} {...column} />
      )}
      </section>
       <ColumnForm  listId={listId}/>
    </div>
  );
};

export default List;