import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const SingleWorkspace = ({ match }) => {
  const { wsId } = match.params

  const ws = useSelector((state) =>
    state.workspaces.find((ws) => ws.id === wsId)
  )

    console.log('finding ws');

  if (!ws) {
    return (
      <section>
        <h2>Workspace not found!</h2>
      </section>
    )
  }

    if (!ws.channels.length) {
        return (
            <section>
                <h2>Workspace doesnt has any channels!</h2>
            </section>
        )
    }

  const renderedWS = ws.channels.map((c) => {
    return (
        <article className="post-excerpt" key={c.id}>
          <h3>{c.name}</h3>
          <Link to={`/channels/${ws.id}/${c.id}`} className="button muted-button">
            View Channel
          </Link>
        </article>
    )
  })

  return (
    <section>
      <article className="post">
        <h2>{ws.name}</h2>
        {renderedWS}
      </article>
    </section>
  )
}
