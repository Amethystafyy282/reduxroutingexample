import { configureStore } from '@reduxjs/toolkit'

import channelsReducer from '../features/channels/channelsSlice'
import usersReducer from '../features/users/usersSlice'
import workspacesReducer from '../features/wordspaces/wsSlice'

export default configureStore({
  reducer: {
    channels: channelsReducer,
    users: usersReducer,
    workspaces: workspacesReducer,
  },
})
