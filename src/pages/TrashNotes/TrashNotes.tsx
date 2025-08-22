import React from 'react'
import { Container, EmptyMsgBox } from '../../styles/styles';
import { MainWrapper } from '../../components';
import { useAppSelector } from '../../hooks/redux';

const TrashNotes = () => {
  const { trashNotes } = useAppSelector((state) => state.noteList);

  return (
    <Container>
      {trashNotes.length === 0 ? (
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
      ) :
        (
          <MainWrapper notes={trashNotes} type="trash" />
        )
      }
    </Container>
  )
}

export default TrashNotes