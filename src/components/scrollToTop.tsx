import React, { Component, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const scrollToTop: React.FC = (props) => {
  useEffect(() => {
    if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0)
    }
  });
  return (
    props.children
  )
}

export default withRouter(scrollToTop);