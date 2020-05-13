import React, { useEffect, useContext, useState } from "react"
import Page from "./Page"
import StateContext from "../StateContext"
import { useParams, Link } from "react-router-dom"
import Axios from "axios"

function ViewSinglePost() {
  const appState = useContext(StateContext)
  const [isLoading, setLoading] = useState(true)
  const [post, setPost] = useState()
  const { id } = useParams()
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/post/${id}`)
        setPost(response.data)
        setLoading(false)
      } catch (e) {
        console.log(e.response.data)
      }
    }
    fetchPosts()
  }, [])

  if (isLoading) return <Page title="...">Loading...</Page>

  const date = new Date(post.createdDate)
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  return (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <a href="#" className="text-primary mr-2" title="Edit">
            <i className="fas fa-edit"></i>
          </a>
          <a className="delete-post-button text-danger" title="Delete">
            <i className="fas fa-trash"></i>
          </a>
        </span>
      </div>

      <p className="text-muted small mb-4">
        <Link to={`/profile/${post.author.username}`}>
          <img className="avatar-tiny" src={post.author.avatar} />
        </Link>
        Posted by <Link to={`/profile/${post.author.username}`}>{post.author.username}</Link> on {formattedDate}
      </p>

      <div className="body-content">{post.body}</div>
    </Page>
  )
}

export default ViewSinglePost
