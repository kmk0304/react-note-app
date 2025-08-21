import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { DeleteBox, FixedContainer } from '../Modal.styles'
import { Box, StyledInput, TagsBox } from './TagModal.styles'
import { toggleTagsModal } from '../../../store/modal/modalSlice'
import getStandardName from '../../../utils/getStandardName'
import { v4 } from 'uuid'
import { addTags, deleteTags } from '../../../store/tags/tagsSlice'
import { removeTags } from '../../../store/noteList/noteListSlice'
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa'
import type { Tag } from '../../../types/tag'

interface TagsModalProps {
  type: string
  addedTags?: Tag[]
  handleTags?: (tag:string, id:string) => void
}

const TagsModal = ({ type, addedTags, handleTags }: TagsModalProps) => {

  const dispatch = useAppDispatch()
  const { tagsList } = useAppSelector(state => state.tags)
  const [inputText, setInputText] = useState('');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() //렌더링 방지

    if (!inputText) return

    dispatch(addTags({ tag: inputText.toLocaleLowerCase(), id: v4() }))
    setInputText('')
  }

  const deleteTagsHandler = (tag: string, id: string) => {
    dispatch(deleteTags(id))
    dispatch(removeTags({ tag }))
  }

  return (
    <FixedContainer>
      <Box>
        <div className='editTags__header'>
          <div className='editTags__title'>
            {type === "add" ? "ADD" : "Edit"} Tags
          </div>
          <DeleteBox
            className='eidtTags__close'
            onClick={(() => dispatch(toggleTagsModal({ type, view: false })))}>
              <FaTimes/>
          </DeleteBox>
        </div>
        <form onSubmit={submitHandler}>
          <StyledInput
            type="text"
            value={inputText}
            placeholder='new Tag'
            onChange={e => setInputText(e.target.value)} />
        </form>
        <TagsBox>
          {tagsList.map(({ tag, id }) => (
            <li key={id}>
              <div className='editTags__Tag'>
                {getStandardName(tag)}
              </div>
              {type === "edit" ? (
                <DeleteBox onClick={() => deleteTagsHandler(tag, id)}>
                  <FaTimes />
                </DeleteBox>
              ) : (
                <DeleteBox >
                  {addedTags?.find(
                    (addedTag: Tag) => addedTag.tag === tag.toLowerCase()
                  ) ? (
                    <FaMinus onClick={() => handleTags!(tag, "remove")} />
                  ) :
                    (
                      <FaPlus onClick={() => handleTags!(tag, "add")} />
                    )
                  }
                </DeleteBox>
              )}

            </li>
          ))}
        </TagsBox>
      </Box>
    </FixedContainer>
  )
}

export default TagsModal