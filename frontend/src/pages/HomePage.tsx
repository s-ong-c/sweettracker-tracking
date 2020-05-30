import * as React from 'react';
import PageTemplate from '@/components/base/PageTemplate';
import styled from 'styled-components';
import media from '../lib/styles/media';
import TrackingContainer from '@/containers/TrackingContainer';
export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = props => {
  return (
    <Template>
      <main>
        <TrackingContainer />
      </main>
    </Template>
  );
};

const Template = styled(PageTemplate)`
  main {
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    width: 768px;
    padding-bottom: 5rem;
    ${media.medium} {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    ${media.small} {
      width: 100%;
      margin-top: 1.5rem;
    }
  }
`;
export default HomePage;
