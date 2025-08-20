import { createSlice, } from "@reduxjs/toolkit";
import type {PayloadAction } from "@reduxjs/toolkit";



interface PassportFormData {
  fullName: string;
  nationality: string;
    passportNumber: string;
    purposeOfVisit: string;
}

const initialState: PassportFormData = {
    fullName: '',
    nationality: '',
    passportNumber: '',
    purposeOfVisit: '',
}

const passportSlice = createSlice({
  name: "passport",
  initialState,
reducers: {
  updatepassportForm: (state, action: PayloadAction<Partial<PassportFormData>>) => {
    Object.assign(state, action.payload);
  },
  resetpassportForm: () => initialState,
}
});

export const { updatepassportForm, resetpassportForm } = passportSlice.actions;
export default passportSlice.reducer;


