import React, { useEffect } from "react"
import Page from "./Page"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <Page title="not found">
      <div className="text-center">
        <h2>Whoops, we can not find page</h2>
        <p className="lead text-muted">
          you can always visit the <Link to="/">Homepage</Link> to get a fresh start.
        </p>
      </div>
    </Page>
  )
}

export default NotFound
