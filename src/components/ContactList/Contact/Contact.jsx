import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/contacts/operations';

import toast, { Toaster } from 'react-hot-toast';

import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.scss';

const Contact = ({ searchContact }) => {
  const { id, name, number } = searchContact;
  const dispatch = useDispatch();

  const notify = promise =>
    toast.promise(promise, {
      loading: 'Removal...',
      success: <b>Contact deleted!</b>,
      error: <b>Could not deleted!</b>,
    });

  const handleDelete = () => {
    const myPromise = dispatch(deleteContact(id));
    notify(myPromise);
  };

  return (
    <li className={css.contactItem}>
      <div className={css.contactPart}>
        <div className={css.contactContact}>
          <FaUser className={css.icon} />
          <span>{name}</span>
        </div>
        <a href="tel:number" className={css.contactContact}>
          <FaPhoneAlt className={css.icon} />
          <span>{number}</span>
        </a>
      </div>
      <div className={css.contactPart}>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </li>
  );
};

export default Contact;
