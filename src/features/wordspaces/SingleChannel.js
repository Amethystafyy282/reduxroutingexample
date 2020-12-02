import React from 'react'
import { useSelector } from 'react-redux'

export const SingleChannel = ({ match }) => {
  const { wsId, channelId } = match.params

    const ws = useSelector((state) => state.workspaces.find((ws) => ws.id === wsId)
    )

    if (!ws) {
        return (
            <section>
                <h2>Workspace not found!</h2>
            </section>
        )
    }

  const channel = ws.channels.find((c) => c.id === channelId);

    if (!channel) {
        return (
            <section>
                <article className="post">
                    <h2>{ws.name}</h2>
                    <h3>Channel with id: {channelId} not found</h3>
                </article>
            </section>
        )
    }

  return (
    <section>
      <article className="post">
        <h2>{ws.name}</h2>
          <h3>{channel.name}</h3>
      </article>
    </section>
  )
}
