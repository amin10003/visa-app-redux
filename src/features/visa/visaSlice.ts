import { createSlice, } from "@reduxjs/toolkit";
import type {PayloadAction } from "@reduxjs/toolkit";



interface VisaFormData {
  fullName: string;
  nationality: string;
    passportNumber: string;
    dateOfBirth: string;
    purposeOfVisit: string;
}

const initialState: VisaFormData = {
    fullName: '',
    nationality: '',
    passportNumber: '',
    dateOfBirth: '',
    purposeOfVisit: '',
}

const visaSlice = createSlice({
  name: "visa",
  initialState,
reducers: {
  updateVisaForm: (state, action: PayloadAction<Partial<VisaFormData>>) => {
    Object.assign(state, action.payload);
  },
  resetVisaForm: () => initialState,
}
});

export const { updateVisaForm, resetVisaForm } = visaSlice.actions;
export default visaSlice.reducer;


