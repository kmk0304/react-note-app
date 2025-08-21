import {v4} from 'uuid'

const notes = [
  {
    title: "title",
    content: "content",
    tags: [{ tag: "coding", id: v4()}],
    color: "#cce0ff",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "10/12/22 2:55 PM",
    createTime: new Date("Sat Dec 10 2022 14:55:22").getTime(),
    editedTime: null,
    id: v4(),
  },
   {
    title: "title2",
    content: "content2",
    tags: [{ tag: "Exercise", id: v4()}],
    color: "#ffcccc",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "10/12/23 2:55 PM",
    createTime: new Date("Sat Dec 10 2023 14:55:22").getTime(),
    editedTime: null,
    id: v4(),
  }
]

export default notes