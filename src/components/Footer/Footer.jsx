import css from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.body}>
          <p className={css.text}>2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;
