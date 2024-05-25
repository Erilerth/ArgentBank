import PropTypes from 'prop-types';
import './_account.scss';

export default function Account({ title, amount, desc }) {
  return (
    <section className='account'>
      <div className='account-content-wrapper'>
        <h3 className='account-title'>{title}</h3>
        <p className='account-amount'>{amount}</p>
        <p className='account-amount-description'>{desc}</p>
      </div>
      <div className='account-content-wrapper cta'>
        <button className='transaction-button'>View transactions</button>
      </div>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
