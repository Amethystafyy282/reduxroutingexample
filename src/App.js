import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { ChannelsList } from './features/channels/ChannelsList'
import { SingleChannelPage } from './features/channels/SingleChannelPage'
import { WSLists } from './features/wordspaces/WSLists'
import { SingleWorkspace } from './features/wordspaces/SingleWorkspace'
import { SingleChannel } from './features/wordspaces/SingleChannel'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <WSLists />
                <ChannelsList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/channels/@me/:postId"
            component={SingleChannelPage}
          />
          <Route
            exact
            path="/channels/:wsId/:channelId"
            component={SingleChannel}
          />
          <Route exact path="/channels/:wsId" component={SingleWorkspace} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
