import * as React from 'react';
import styled from 'styled-components';

const TopTemplateBlock = styled.div`
  outline: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
export interface TopTemplateProps {}

const TopTemplate: React.FC<TopTemplateProps> = ({ children }) => {
  return <TopTemplateBlock>{children}</TopTemplateBlock>;
};

export default TopTemplate;
