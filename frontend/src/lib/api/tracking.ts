import apiClient from './apiClient';

export const getTrackingInfo = (tCode: string, tInvoice: string) =>
  apiClient.post<TrackingInfo>('/api/trackingInfo', {
    t_code: tCode,
    t_invoice: tInvoice,
  });

export interface TrackingInfo {
  data: {
    result: string;
    senderName: string;
    receiverName: string;
    itemName: string;
    invoiceNo: string;
    receiverAddr: string;
    orderNumber: string;
    adUrl: string;
    estimate: string;
    level: number;
    complete: boolean;
    recipient: string;
    itemImage: string;
    productInfo: null;
    zipCode: null;
    completeYN: string;
    msg?: string;
  };
}
