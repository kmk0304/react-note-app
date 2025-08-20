import { createSlice } from "@reduxjs/toolkit";

interface ModalSate {
  viewEditTagModal:boolean,
  viewAddTagModal:boolean,
  viewCreateTagModal:boolean,
  viewFiltersTagModal:boolean
}
const initialState: ModalSate = {
  viewEditTagModal:false,
  viewAddTagModal:false,
  viewCreateTagModal:false,
  viewFiltersTagModal:false
}
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers:{}
})

export default modalSlice.reducer