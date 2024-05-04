import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import css from './AppBar.module.scss';

const AppBar = () => { 
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.body}>
          <div className={css.navigation}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
