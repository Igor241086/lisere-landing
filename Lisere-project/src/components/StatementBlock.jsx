import React from 'react';
import PropTypes from 'prop-types';
import './StatementBlock.scss';

const StatementBlock = ({ text }) => {
  return (
    <section className="statement">
      <div className="grid-15x13 statement__content">
        <div className="col-start-2 col-span-13 statement__centered-block">
          <h2 className="statement__text">{text}</h2>
        </div>
      </div>
    </section>
  );
};

StatementBlock.propTypes = {
  text: PropTypes.string.isRequired,
};

export default StatementBlock;
