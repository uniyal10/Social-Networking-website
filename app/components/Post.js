import React, { useEffect } from "react"
import { Link } from "react-router-dom"
function Post(props) {
  const post = props.post
  const date = new Date(post.createdDate)
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  return (
    <Link key={post._id} to={`/post/${post._id}`} className="list-group-item list-group-item-action">
      <img className="avatar-tiny" src={post.author.avatar} /> <strong>{post.body}</strong>{" "}
      <span className="text-muted small">
        by {post.author.username} on {formattedDate}
      </span>
    </Link>
  )
}

export default Post
