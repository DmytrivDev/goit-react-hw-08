import { useSelector } from 'react-redux';

import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/selectors';

import Contact from './Contact/Contact';

import css from './ContactList.module.scss';
 
const ContactList = () => {
  const contactsFilter = useSelector(selectFilteredContacts);
  const nameFilter = useSelector(selectNameFilter);

  return (
    <div className={css.wrapp}>
      {contactsFilter.length === 0 && nameFilter !== '' ? (
        <div className={css.nothingFound}>Nothing found</div>
      ) : (
        <ul className={css.contactsList}>
          {contactsFilter.map(item => (
            <Contact key={item.id} searchContact={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
