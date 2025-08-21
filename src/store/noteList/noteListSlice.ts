import { createSlice } from "@reduxjs/toolkit";
import type { Note } from "../../types/note";

interface noteListState {
  mainNotes:Note[],
  archiveNotes: Note[],
  trashNotes: Note[],
  editNotes: Note[]
}

const initialState: noteListState = {
  mainNotes:[],
  archiveNotes: [],
  trashNotes: [],
  editNotes: []
}

const noteListSlice = createSlice({
  name: 'noteList',
  initialState,
  reducers: {
    removeTags: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) => ({
        ...note,
        tags: note.tags.filter(({ tag }) => tag !== payload.tag)
      })
      )
    }
  }
})

export const { removeTags } = noteListSlice.actions
 
export default noteListSlice.reducer