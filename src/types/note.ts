import type { Tag } from "./tag"

export interface Note {
  title: string
  content: string
  tags: Tag[]
  color: string
  priority: string
  isPinned: boolean
  isRed: boolean
  date: string
  createTime: number
  editedTime: string | number
  id: string
}