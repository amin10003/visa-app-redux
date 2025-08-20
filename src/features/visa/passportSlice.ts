import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PassportFormData {
  fullName: string;
  nationality: string;
  passportNumber: string;
  expiryDate: string;       // ✅ added expiry date
  
}

const initialState: PassportFormData = {
  fullName: '',
  nationality: '',
  passportNumber: '',
  expiryDate: '',           // ✅ initialize expiryDate
  // ✅ added expiry date
};

const passportSlice = createSlice({
  name: "passport",
  initialState,
  reducers: {
    updatePassportForm: (
      state,
      action: PayloadAction<Partial<PassportFormData>>
    ) => {
      Object.assign(state, action.payload);
    },
    resetPassportForm: () => initialState,
  },
});

export const { updatePassportForm, resetPassportForm } = passportSlice.actions;
export default passportSlice.reducer;
