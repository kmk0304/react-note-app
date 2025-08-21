import React from 'react'
import type { Note } from '../../types/note'
import { Card, ContentBox, FooterBox, TagsBox, TopBox } from './NoteCard.styles'
import { NotesIconBox } from '../../styles/styles'
import { BsFillPinFill } from 'react-icons/bs'

interface NoteCardProps {
  note: Note
  type: string
}

const NoteCard = ({ note, type }: NoteCardProps) => {
  const { title, content, tags, color, priority, isPinned, isRed, date, createTime, editedTimeid } = note
  return (
    <Card
      style={{ background: color }}>
      <TopBox>
        <div className='noteCard__title'>
          {title.length > 10 ? title.slice(0, 10) + '...' : title}
        </div>
        <div className='nostCard__top-options'>
          <span className='noteCard__priority'>
            {type !== "archive" && type !== "trash" && (
              <NotesIconBox className='noteCard__pin'>
                <BsFillPinFill style={{color: isPinned ? "red" : ""}}/>
              </NotesIconBox>
            )}
          </span>
        </div>
      </TopBox>
      <ContentBox>
        {content}
      </ContentBox>
      <TagsBox>
        {tags.map(({ tag, id }) => (
          <span key={id}>{tag}</span>
        ))}
      </TagsBox>
      <FooterBox>
        <div className='noteCard__date'>{date}</div>
        {getRelevantBtns()}
      </FooterBox>

    </Card>
  )
}

export default NoteCard