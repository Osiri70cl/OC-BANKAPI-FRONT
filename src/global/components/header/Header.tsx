"use client";

const Header = () => {
  return (
    <header>
      <nav className="main_nav">
        <a className="main_nav_logo" href="/">
          <img
            className="main_nav_logo_image"
            src="/images/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr_only">Argent Bank</h1>
        </a>
        <div>
          <a className="main_nav_item" href="/user">
            <i className="fa fa_user_circle"></i>
            Tony
          </a>
          <a className="main_nav_item" href="/">
            <i className="fa fa_sign_out"></i>
            Sign Out
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
