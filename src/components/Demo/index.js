import React from 'react';
import PropTypes from 'prop-types';

const Demo = ({ message, doAction }) => (
  <div>
    <p>{message}</p>
    <div onClick={doAction}>Click</div>
  </div>
);

Demo.propTypes = {
  message: PropTypes.string.isRequired,
  doAction: PropTypes.func.isRequired,
};

export default Demo;
