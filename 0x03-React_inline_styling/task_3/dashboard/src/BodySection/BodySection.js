import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './BodySection.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySection: {
    width: '100%',
    marginTop: '160px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  
  bodySectionH2: {
    width: '100%',
  },
  
  bodySectionTable: {
    margin: '0 auto';
  }
  
})

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.bodySection)}>
        <h2 className={css(styles.bodySectionH2)}>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: '',
};

BodySection.propTypes = {
  title: PropTypes.string,
};

export default BodySection;
