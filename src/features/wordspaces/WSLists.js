import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const WSLists = () => {
  const workspaces = useSelector((state) => state.workspaces)

  // Sort workspaces in reverse chronological order by datetime string
  const orderedworkspaces = workspaces.slice();

  const renderedworkspaces = orderedworkspaces.map((workspace) => {
    return (
      <article className="post-excerpt" key={workspace.id}>
        <h3>{workspace.name}</h3>
        <Link to={`channels/${workspace.id}`} className="button muted-button">
          View Workspace
        </Link>
      </article>
    )
  })

  return (
    <section className="posts-list">
      <h2>Workspaces</h2>
      {renderedworkspaces}
    </section>
  )
}
