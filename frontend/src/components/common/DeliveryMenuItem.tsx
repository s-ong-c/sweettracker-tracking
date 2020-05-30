import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const DeliveryMenuItemBlock = styled.div`
  color: ${palette.gray9};
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  &:hover {
    background: ${palette.gray0};
  }
`;
export interface DeliveryMenuItemProps {
  code: string;
  codeName: string;
  onClick?: () => void;
  onSelected: (code: string, codeName: string) => void;
}

const AgeMenuItem: React.FC<DeliveryMenuItemProps> = ({
  children,
  code,
  codeName,
  onSelected,
}) => {
  const handleSelect = React.useCallback(() => {
    onSelected(code, codeName);
  }, [onSelected, code, codeName]);

  return (
    <DeliveryMenuItemBlock onClick={handleSelect}>
      {children}
    </DeliveryMenuItemBlock>
  );
};

export default AgeMenuItem;
