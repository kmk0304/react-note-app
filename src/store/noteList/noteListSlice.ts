import { createSlice } from "@reduxjs/toolkit";
import type { Note } from "../../types/note";

interface noteListState {
  mainNotes:Note[],
  archiveNotes: Note[],
  trashNotes: Note[],
  editNotes: Note[]
}

const initialState = {
  mainNotes:[],
  archiveNotes: [],
  trashNotes: [],
  editNotes: []
}

const noteListSlice = createSlice({
  name: 'noteList',
  initialState,
  reducers: {}
})

export default noteListSlice.reducer