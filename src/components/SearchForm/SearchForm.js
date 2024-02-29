import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getSearchPhase, updateSearchPhrase } from '../../redux/searchPhaseRedux';

const SearchForm = () => {
  const [searchedPhrase, setSearchedPhrase] = useState( useSelector(getSearchPhase) );
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    dispatch( updateSearchPhrase(searchedPhrase));
  };

  return(
    <form className={styles.searchForm} onSubmit={handleSubmit}>
        <TextInput placeholder="Search…" value={searchedPhrase} onChange={ e=> setSearchedPhrase(e.target.value)} />
        <Button>
        <span className="fa fa-search" />
        </Button>
      </form>
  );
};

export default SearchForm;