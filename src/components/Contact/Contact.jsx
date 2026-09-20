import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';

import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
