import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import anime from 'animejs';
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

  animate = () => {
    const loader = anime.timeline({
      complete: () => this.setState({ isLoading: false }),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ isLoading: false }), 4000);
    this.animate();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { location } = this.props;
    const { isLoading } = this.state;

    return (
      <Layout location={location} isLoading={isLoading}>
        <StyledMainContainer className="fillHeight">
          <Hero />
          <About />
          <Jobs />
          <Contact />
        </StyledMainContainer>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
