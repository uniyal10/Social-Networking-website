import React, { useEffect, useContext, useState } from "react"
import Page from "./Page"
import StateContext from "../StateContext"
import { useParams, Link } from "react-router-dom"
import Axios from "axios"
import LoadingDotsicon from "./LodingDotsicon"
import ReactMarkdown from "react-markdown"
import ReactTooltip from "react-tooltip"

function ViewSinglePost() {
  const appState = useContext(StateContext)
  const [isLoading, setLoading] = useState(true)
  const [post, setPost] = useState()
  const { id } = useParams()
  useEffect(() => {
    const ourRequest = Axios.CancelToken.source()
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/post/${id}`, { cancelToken: ourRequest.token })
        setPost(response.data)
        setLoading(false)
      } catch (e) {
        console.log("request not served")
      }
    }
    fetchPosts()
    return () => {
      ourRequest.cancel()
    }
  }, [])

  if (isLoading)
    return (
      <Page title="...">
        <LoadingDotsicon />
      </Page>
    )

  const date = new Date(post.createdDate)
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  return (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <Link to={`/post/${id}/edit`} data-tip="Edit" data-for="edit" className="text-primary mr-2" title="Edit">
            <i className="fas fa-edit"></i>
          </Link>{" "}
          <ReactTooltip id="edit" className="custom-tooltip" />
          <a data-tip="Delete" data-for="delete" className="delete-post-button text-danger">
            <i className="fas fa-trash"></i>
          </a>
          <ReactTooltip id="delete" className="custom-tooltip" />
        </span>
      </div>

      <p className="text-muted small mb-4">
        <Link to={`/profile/${post.author.username}`}>
          <img className="avatar-tiny" src={post.author.avatar} />
        </Link>
        Posted by <Link to={`/profile/${post.author.username}`}>{post.author.username}</Link> on {formattedDate}
      </p>

      <div className="body-content">
        <ReactMarkdown source={post.body} allowedTypes={["paragraph", "strong", "emphasis", "text", "heading", "list", "listItem"]} />
      </div>
    </Page>
  )
}

export default ViewSinglePost
