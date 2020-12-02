import React from 'react'
import { useSelector } from 'react-redux'

import { ChannelAuthor } from './ChannelAuthor'
import { TimeAgo } from './TimeAgo'

export const SingleChannelPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.channels.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <ChannelAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}
