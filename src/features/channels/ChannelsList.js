import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ChannelAuthor } from './ChannelAuthor'
import { TimeAgo } from './TimeAgo'

export const ChannelsList = () => {
  const channels = useSelector((state) => state.channels)

  // Sort channels in reverse chronological order by datetime string
  const orderedChannels = channels
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  const renderedChannels = orderedChannels.map((c) => {
    return (
      <article className="post-excerpt" key={c.id}>
        <h3>{c.title}</h3>
        <div>
          <ChannelAuthor userId={c.user} />
          <TimeAgo timestamp={c.date} />
        </div>
        <p className="post-content">{c.content.substring(0, 100)}</p>
        <Link to={`channels/@me/${c.id}`} className="button muted-button">
          View Channel
        </Link>
      </article>
    )
  })

  return (
    <section className="posts-list">
      <h2>Channels</h2>
      {renderedChannels}
    </section>
  )
}
