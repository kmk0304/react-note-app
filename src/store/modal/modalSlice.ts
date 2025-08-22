import { createSlice } from "@reduxjs/toolkit";

interface ModalSate {
  viewEditTagsModal:boolean,
  viewAddTagModal:boolean,
  viewCreateTagModal:boolean,
  viewFiltersModal:boolean
}
const initialState: ModalSate = {
  viewEditTagsModal:false,
  viewAddTagModal:false,
  viewCreateTagModal:false,
  viewFiltersModal:false
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
        state.viewEditTagsModal = view
      }
    },
    toggleCreateNoteModal:(state, action)=>{
      state.viewCreateTagModal = action.payload

    },
    toggleFilterNoteModal:(state, action) =>{
      state.viewFiltersModal = action.payload
    }
  }
})

export const {toggleTagsModal, toggleCreateNoteModal, toggleFilterNoteModal} = modalSlice.actions
export default modalSlice.reducer