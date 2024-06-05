import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Footer({ user }) {
  return (
    <footer className='footer'>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && ( // Display the paragraph only when user is logged in
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string,
  }),
};

Footer.defaultProps = {
  user: {
    isLoggedIn: false,
    email: '',
  },
};

const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

export default connect(mapStateToProps)(Footer);
