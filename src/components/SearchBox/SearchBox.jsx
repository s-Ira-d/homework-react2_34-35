import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';

import css from './SearchBox.module.css';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <label htmlFor="search">Find contacts by name</label>

      <input id="search" type="text" value={filter} onChange={handleChange} />
    </div>
  );
};
