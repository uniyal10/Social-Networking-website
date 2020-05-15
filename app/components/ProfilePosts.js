import React, { useEffect, useContext, useState } from "react"
import StateContext from "../StateContext"
import Axios from "axios"
import { useParams, Link } from "react-router-dom"
import LoadingDotsicon from "./LodingDotsicon"
import Post from "./Post"

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
  }, [username])
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
          return <Post noAuthor={true} post={post} key={post._id} />
        })}
      </div>
    </>
  )
}

export default ProfilePosts
