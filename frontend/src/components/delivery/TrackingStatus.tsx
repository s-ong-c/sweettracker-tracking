import * as React from 'react';
import styled from 'styled-components';
import { TrackingInfo } from '@/lib/api/tracking';
import useToggle from '@/lib/hooks/useToggle';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import media from '@/lib/styles/media';
import palette from '@/lib/styles/palette';

const TrackingStatusBlock = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  & > .wrapper {
    display: flex;
  }
  .title-wrapper {
    width: 9.5rem;
    flex-shrink: 0;
    h3 {
      line-height: 1.5;
      color: ${palette.gray8};
      margin: 0;
      font-size: 1.125rem;
      ${media.small} {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
const ContentCard = styled.div`
  background: #2b303c;
  color: white;
  margin-bottom: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  padding: 2rem;
  .top {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    border-bottom: 1px solid #3b3f4a;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    h2 {
      font-size: 2.25rem;
      margin: 1rem;
    }
    span {
      color: #9c9ea5;
    }
  }
  .bottom {
    line-height: 35px;
    display: flex;
    flex: 1;
    .left {
      flex-direction: column;
      display: flex;
      font-size: 1rem;
      color: #8e9094;
    }
    .right {
      margin-left: auto;
      font-weight: bold;
      font-size: 1rem;
      display: flex;
      margin-left: auto;
      flex-direction: column;
      text-align: right;
    }
  }
  button {
    display: flex;
    padding: 0;
    width: 100%;
    height: 46px;
    background: #2b303c;
    border: none;
    outline: none;
    justify-items: center;
    justify-content: center;
    svg {
      color: white;
      justify-items: center;
      font-size: 1.25rem;
      padding-right: 1.25rem;
    }
  }
`;

export interface TrackingStatusProps {
  trackingInfo: TrackingInfo;
}

const TrackingStatus: React.FC<TrackingStatusProps> = ({ trackingInfo }) => {
  const {
    invoiceNo,
    receiverName,
    receiverAddr,
    level,
    complete,
    senderName,
  } = trackingInfo.data;
  const [showDetail, toggleShowDetail] = useToggle(false);
  const statusType: {
    [number: string]: {
      title: string;
    };
  } = {
    1: {
      title: '배송준비중',
    },
    2: {
      title: '집화완료',
    },
    3: {
      title: '배송중',
    },
    4: {
      title: '지점 도착',
    },
    5: {
      title: '배송출발',
    },
    6: {
      title: '배송 완료',
    },
  };

  return (
    <TrackingStatusBlock>
      <div className="wrapper">
        <div className="title-wrapper">
          <h3>배송정보</h3>
        </div>
      </div>
      <ContentCard>
        <div className="top">
          <span>운송장번호</span>
          <h2>{invoiceNo}</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <span>고객성명</span>
            <span>배송상태</span>
          </div>
          <div className="right">
            <span>{receiverName}</span>
            <span>{statusType[level].title}</span>
          </div>
        </div>
        {showDetail && (
          <div className="bottom">
            <div className="left">
              <span>보내는 사람</span>
              <span>배송완료/미완료</span>
              <span>받는 사람 주소</span>
            </div>
            <div className="right">
              <span>{senderName}</span>
              <span>{complete ? '완료' : '미완료'}</span>
              <span>{receiverAddr}</span>
            </div>
          </div>
        )}
        <button onClick={toggleShowDetail}>
          {showDetail ? <MdExpandLess /> : <MdExpandMore />}
        </button>
      </ContentCard>
    </TrackingStatusBlock>
  );
};

export default TrackingStatus;
