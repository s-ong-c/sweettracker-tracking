import * as React from 'react';
import styled from 'styled-components';
import DeliveryMenuItem from './DeliveryMenuItem';
import OutsideClickHandler from 'react-outside-click-handler';

const DeliveryMenuBlock = styled.div`
  position: absolute;
  > .menu-wrapper {
    width: 10rem;
    background: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
`;
export interface DeliveryMenuProps {
  onClose: () => void;
  onSelected: (code: string, codeName: string) => void;
  visible: boolean;
}

const DeliveryMenu: React.FC<DeliveryMenuProps> = ({
  onClose,
  onSelected,
  visible,
}) => {
  if (!visible) return null;
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <DeliveryMenuBlock>
        <div className="menu-wrapper">
          <DeliveryMenuItem
            codeName={'CJ대한통운'}
            code={'04'}
            onSelected={onSelected}
          >
            CJ대한통운
          </DeliveryMenuItem>
          <DeliveryMenuItem
            codeName={'한진택배'}
            code={'05'}
            onSelected={onSelected}
          >
            한진택배
          </DeliveryMenuItem>
          <DeliveryMenuItem
            codeName={'경동택배'}
            code={'23'}
            onSelected={onSelected}
          >
            경동택배
          </DeliveryMenuItem>
        </div>
      </DeliveryMenuBlock>
    </OutsideClickHandler>
  );
};

export default DeliveryMenu;
