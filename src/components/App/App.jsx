import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';

import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <h1>Книга контактів</h1>

      <ContactForm />

      <h2>Контакти</h2>

      <SearchBox />

      <ContactList />
    </div>
  );
};

export default App;
