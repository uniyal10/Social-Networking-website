import React, { useEffect, useContext, useState } from "react"
import StateContext from "../StateContext"
import Axios from "axios"
import { useParams, Link } from "react-router-dom"
import LoadingDotsicon from "./LodingDotsicon"

function ProfilePosts() {
  const { username } = useParams()
  const [isLoading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const outRequest = Axios.CancelToken.source()
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/posts`, { cancelToken: outRequest.token })
        setPosts(response.data)
        setLoading(false)
      } catch (e) {
        console.log("request can not served or cancelled")
      }
    }
    fetchPosts()
    return () => {
      outRequest.cancel()
    }
  }, [])
  if (isLoading)
    return (
      <div>
        <LoadingDotsicon />
      </div>
    )
  const appState = useContext(StateContext)
  return (
    <>
      <div className="list-group">
        {posts.map(post => {
          const date = new Date(post.createdDate)
          const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
          return (
            <Link key={post._id} to={`/post/${post._id}`} className="list-group-item list-group-item-action">
              <img className="avatar-tiny" src={appState.user.avatar} /> <strong>{post.body}</strong> <span className="text-muted small">{formattedDate}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default ProfilePosts
