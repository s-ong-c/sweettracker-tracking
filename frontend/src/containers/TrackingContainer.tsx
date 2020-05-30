import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IDeliveryState, DELIVERY, deliveryActions } from '@/modules/delivery';
import { IRootState } from '@/modules';
import DeliverySection from '@/components/common/DeliverySection';
import DeliveryMenu from '@/components/common/DeliveryMenu';
import TopTemplate from '@/components/common/TopTemplate';
import useToggle from '@/lib/hooks/useToggle';
import { getTrackingInfo, TrackingInfo } from '@/lib/api/tracking';
import TrackingInput from '@/components/delivery/TrackingInput';
import TrackingStatus from '@/components/delivery/TrackingStatus';

export type TrackingContainerProps = {};
function TrackingContainer(props: TrackingContainerProps) {
  const dispatch = useDispatch();
  const { selectCompany }: IDeliveryState = useSelector(
    (state: IRootState) => state[DELIVERY],
  );
  const [data, getInfo] = React.useState<TrackingInfo | null>(null);
  const [error, setError] = React.useState('');
  // 택배사 선택
  const [userMenu, toggleUserMenu] = useToggle(false);
  const onClickCode = React.useCallback(
    (selectCode: string, selectCodeName: string) => {
      dispatch(
        deliveryActions.selectProblemAction({ selectCode, selectCodeName }),
      );
      toggleUserMenu();
    },
    [dispatch, toggleUserMenu],
  );

  // 운송장 조회
  const onSearch = React.useCallback(
    async (keyword: string) => {
      if (selectCompany.selectCode === '') {
        alert('택배사 먼저 선택해주세요');
        return null;
      }
      const { data } = await getTrackingInfo(selectCompany.selectCode, keyword);
      if (data.data.msg) {
        getInfo(null);
        setError(data.data.msg);
        return;
      }
      if (data.data.result === 'N') {
        getInfo(null);
        setError('택배사를 올바르게 선택하세요');
        return;
      }
      setError('');
      getInfo(data);
    },
    [selectCompany.selectCode],
  );
  return (
    <>
      <TopTemplate>
        <DeliverySection
          status={selectCompany.selectCodeName}
          onClick={toggleUserMenu}
        />
        <DeliveryMenu
          onClose={toggleUserMenu}
          onSelected={onClickCode}
          visible={userMenu}
        />
        <TrackingInput onSearch={onSearch} initial="" />
      </TopTemplate>
      {error && <div>{error}</div>}
      {data && data.data.result === 'Y' && (
        <TrackingStatus trackingInfo={data} />
      )}
    </>
  );
}

export default TrackingContainer;
