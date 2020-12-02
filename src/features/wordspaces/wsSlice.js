import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    name: 'First Workspace!',
    channels: [
      {
        id: '1',
        name: 'Workspace 1 channel 1'
      },
      {
        id: '2',
        name: 'Workspace 1 channel 2'
      },
      {
        id: '3',
        name: 'Workspace 1 channel 3'
      },
      {
        id: '4',
        name: 'Workspace 1 channel 4'
      },
    ],
    owner: '0',
  },
  {
    id: '2',
    name: 'Second Workspace!',
    channels: [
      {
        id: '1',
        name: 'Workspace 2 channel 1'
      },
      {
        id: '2',
        name: 'Workspace 2 channel 2'
      },
      {
        id: '3',
        name: 'Workspace 2 channel 3'
      },
      {
        id: '4',
        name: 'Workspace 2 channel 4'
      },
    ],
    owner: '1',
  },
  {
    id: '3',
    name: 'Third Workspace!',
    channels: [],
    owner: '2',
  },
]

const workspacesSlice = createSlice({
  name: 'workspaces',
  initialState,
  reducers: {},
})

export default workspacesSlice.reducer
