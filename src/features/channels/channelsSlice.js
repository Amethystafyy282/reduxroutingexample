import { createSlice } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'First Channel!',
    content: 'Hello!',
    user: '0',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '2',
    title: 'Second Channel',
    content: 'Hello from the other side!',
    user: '2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
]

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {},
})

export default channelsSlice.reducer
