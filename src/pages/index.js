import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    const { location } = this.props;

    return (
      <Layout location={location}>
        <Hero />
          <About />
          <Jobs />
          <Contact />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
