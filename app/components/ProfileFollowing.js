import React, { useEffect, useContext, useState } from "react"
import StateContext from "../StateContext"
import Axios from "axios"
import { useParams, Link } from "react-router-dom"
import LoadingDotsicon from "./LodingDotsicon"

function ProfileFollowing() {
  const { username } = useParams()
  const [isLoading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const outRequest = Axios.CancelToken.source()
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/following`, { cancelToken: outRequest.token })
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
        {posts.map((follower, index) => {
          return (
            <Link key={index} to={`/profile/${follower.username}`} className="list-group-item list-group-item-action">
              <img className="avatar-tiny" src={follower.avatar} /> {follower.username}
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default ProfileFollowing
