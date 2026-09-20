import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const normalizedName = name.trim();
    const normalizedNumber = number.trim();

    if (!normalizedName || !normalizedNumber) {
      return;
    }

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${normalizedName} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: normalizedName,
        number: normalizedNumber,
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>

      <input
        id={nameId}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor={numberId}>Number</label>

      <input
        id={numberId}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
      />

      <button type="submit">Add contact</button>
    </form>
  );
};
