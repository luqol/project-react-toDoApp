import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllCollumns } from '../../redux/store';

const List = () => {
  
  const columns = useSelector(getAllCollumns);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
          <h2 className={styles.title} >Things to do<span>soon</span></h2>
      </header>
      <p className={styles.description}>Intresting things I want to check out</p>
      <section className={styles.columns}>
      {columns.map(column => 
      <Column key={column.id} {...column} />
      )}
      </section>
       <ColumnForm />
    </div>
  );
};

export default List;