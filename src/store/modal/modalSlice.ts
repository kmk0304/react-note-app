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
  reducers:{
    toggleTagsModal: (state, {payload}) =>{
      const {type, view} = payload
      if(type==="add"){
        state.viewAddTagModal = view
      } else {
        state.viewEditTagModal = view
      }
    },
    toggleCreateNoteModal:(state, action)=>{
      state.viewCreateTagModal = action.payload

    },
    toggleFilterNoteModal:(state, action) =>{
      state.viewFiltersTagModal = action.payload
    }
  }
})

export const {toggleTagsModal, toggleCreateNoteModal, toggleFilterNoteModal} = modalSlice.actions
export default modalSlice.reducer