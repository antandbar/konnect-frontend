
function LoginPage() {

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Konnect</h1>
      <form className="loginForm">
        <input
          type="text"
          name="email"
          label="phone, email or username"
        />
        <input
          type="password"
          name="password"
          label="password"
        />
        <input
          type="checkbox"
          name="remember"
          value="remember"
        />

        <button
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default LoginPage
