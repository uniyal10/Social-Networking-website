import React from "react"
import ReactDOM from "react-dom"

function ExampleComponent() {
  return (
    <>
      <header class="header-bar bg-primary mb-3">
        <div class="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 class="my-0 mr-md-auto font-weight-normal">
            <a href="/" class="text-white">
              ComplexApp
            </a>
          </h4>
          <form class="mb-0 pt-2 pt-md-0">
            <div class="row align-items-center">
              <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                <input name="username" class="form-control form-control-sm input-dark" type="text" placeholder="Username" autocomplete="off" />
              </div>
              <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                <input name="password" class="form-control form-control-sm input-dark" type="password" placeholder="Password" />
              </div>
              <div class="col-md-auto">
                <button class="btn btn-success btn-sm">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </header>

      <div class="container py-md-5">
        <div class="row align-items-center">
          <div class="col-lg-7 py-3 py-md-5">
            <h1 class="display-3">Remember Writing?</h1>
            <p class="lead text-muted">Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
          </div>
          <div class="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form>
              <div class="form-group">
                <label for="username-register" class="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input id="username-register" name="username" class="form-control" type="text" placeholder="Pick a username" autocomplete="off" />
              </div>
              <div class="form-group">
                <label for="email-register" class="text-muted mb-1">
                  <small>Email</small>
                </label>
                <input id="email-register" name="email" class="form-control" type="text" placeholder="you@example.com" autocomplete="off" />
              </div>
              <div class="form-group">
                <label for="password-register" class="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input id="password-register" name="password" class="form-control" type="password" placeholder="Create a password" />
              </div>
              <button type="submit" class="py-3 mt-4 btn btn-lg btn-success btn-block">
                Sign up for ComplexApp
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer class="border-top text-center small text-muted py-3">
        <p>
          <a href="/" class="mx-1">
            Home
          </a>{" "}
          |{" "}
          <a class="mx-1" href="/about-us">
            About Us
          </a>{" "}
          |{" "}
          <a class="mx-1" href="/terms">
            Terms
          </a>
        </p>
        <p class="m-0">
          Copyright &copy; 2020{" "}
          <a href="/" class="text-muted">
            ComplexApp
          </a>
          . All rights reserved.
        </p>
      </footer>
    </>
  )
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
