import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  console.log('location', location)
  return  (
    <Layout location={location}>
       <Hero />
        <About />
        <Jobs />
        <Contact />
    </Layout>
  )
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
