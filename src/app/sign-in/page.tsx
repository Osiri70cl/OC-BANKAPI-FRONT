export default function SignIn() {
  return (
    <main className="main bg_dark">
      <section className="sign_in_content">
        <i className="fa fa_user_circle sign_in_icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input_wrapper">
            <label>Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input_wrapper">
            <label>Password</label>
            <input type="password" id="password" />
          </div>
          {/* <div className="input_remember">
            <input type="checkbox" id="remember_me" />
            <label for="remember_me">Remember me</label>
          </div> */}
          {/* <!_ PLACEHOLDER DUE TO STATIC SITE _> */}
          <a href="./user.html" className="sign_in_button">
            Sign In
          </a>
          {/* <!_ SHOULD BE THE BUTTON BELOW _>
          <!_ <button className="sign_in_button">Sign In</button> _>
          <!_  _> */}
        </form>
      </section>
    </main>
  );
}
