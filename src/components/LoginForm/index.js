import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', submitError: '', errorMsg: ''}

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({submitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onFailure(data.error_msg)
    }
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="password-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="text"
          id="password"
          className="input-password"
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
      </>
    )
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label className="user-name" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="user-name"
          placeholder="Username"
          value={username}
          onChange={this.changeUsername}
        />
      </>
    )
  }

  render() {
    const {submitError, errorMsg} = this.state

    return (
      <div className="login-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-con" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="image"
          />
          <div className="input-con">{this.renderUsername()}</div>
          <div className="input-con">{this.renderPassword()}</div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {submitError && <p className="err-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
