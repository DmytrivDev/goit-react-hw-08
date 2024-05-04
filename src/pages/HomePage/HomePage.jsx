import Section from '../../components/Layout/Section/Section';
import DocumentTitle from '../../components/Layout/DocumentTitle/DocumentTitle';

import css from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Section>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.home}>
        <h1 className={css.title}>Welcome to the contact book</h1>
        <p className={css.text}>Here you can create your contact book</p>
      </div>
    </Section>
  );
};

export default HomePage;
