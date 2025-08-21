import { FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa"
import { NotesIconBox } from "../styles/styles"
import { RiInboxUnarchiveFill } from './react-icon/ri'
import type { Dispatch } from "@reduxjs/toolkit"
import type { Note } from "../types/note"


const getRelevantBtns = (type:string, note: Note, dispatch:Dispatch) => {
  if (type === "archive") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(unarchiveNote(note))}
          data-info="Unarchive"
        >
          <RiInboxUnarchiveFill style={{ fontSize: '1rem' }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNote(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    )
  } else if (type === "trash") {
    return (
      <>
          <NotesIconBox
          onClick={() => dispatch(restoreNote(note))}
          data-info="Restore"
        >
          <FaTrashRestore style={{ fontSize: '1rem' }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(deleteNote(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    )
  } else {
    return (
      <>
         <NotesIconBox
          onClick={clickHandler}
          data-info="Edit"
        >
          <FaEdit style={{ fontSize: '1rem' }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setArchiveNotes(note))}
          data-info="Archive"
        >
         <FaTrashRestore style={{ fontSize: '1rem' }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNote(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    )
  }
}

export default getRelevantBtns