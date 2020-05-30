import * as React from 'react';
import styled from 'styled-components';
import { MdArrowDropDown } from 'react-icons/md';
import palette from '../../lib/styles/palette';

const DeliverySectionBlock = styled.div`
  cursor: pointer;
  box-shadow: 0px 0 12px rgba(0, 0, 0, 0.1);
  width: 10rem;
  height: 43px;
  display: flex;
  align-items: center;
  text-align: left;
  .text {
    font-size: 0.875rem;
    text-indent: 1rem;
    flex-basis: 80%;
    color: black;
  }

  svg {
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    margin-left: 0.25rem;
    color: ${palette.gray6};
    transition: 0.125s all ease-in;
  }
  justify-content: flex-end;
  align-items: center;
  &:hover {
    img {
      box-shadow: 0px 0 12px rgba(0, 0, 0, 0.1);
    }
    svg {
      color: ${palette.gray9};
    }
  }
`;
export interface DeliverySectionProps {
  status: string;
  onClick: () => void;
}

const DeliverySection: React.FC<DeliverySectionProps> = ({
  onClick,
  status,
}) => {
  return (
    <DeliverySectionBlock onClick={onClick}>
      <div className="text">
        {status === '' ? '택배사 선택하세요.' : ` ${status} `}
      </div>
      <MdArrowDropDown />
    </DeliverySectionBlock>
  );
};

export default DeliverySection;
