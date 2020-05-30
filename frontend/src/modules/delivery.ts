import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const name = 'Delivery';

interface ICompany {
  selectCode: string;
  selectCodeName: string;
}
export interface IDeliveryState {
  selectCompany: ICompany;
}
const initialState: IDeliveryState = {
  selectCompany: {
    selectCode: '',
    selectCodeName: '',
  },
};
const _ = createSlice({
  name,
  initialState,
  reducers: {
    selectProblemAction(
      state: IDeliveryState,
      { payload }: PayloadAction<ICompany>,
    ) {
      state.selectCompany = payload;
    },
  },
});
export const DELIVERY = _.name;
export const deliveryActions = _.actions;
export const deliveryReducer = _.reducer;
