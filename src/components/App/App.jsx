import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contactsSlice';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';

import css from './App.module.css';

import { selectIsLoading, selectError } from '../../redux/contactsSelectors.js';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Книга контактів</h1>

      <ContactForm />

      <h2>Контакти</h2>

      <SearchBox />

      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <ContactList />
    </div>
  );
};

export default App;
