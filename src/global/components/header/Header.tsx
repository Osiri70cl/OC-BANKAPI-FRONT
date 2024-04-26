"use client";
import { clearTokenData } from "@/global/redux/reducers/tokenSlice";
import { store } from "@/global/redux/store";
import { deleteCookie } from "cookies-next";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Header = () => {
  const user = store.getState().user;
  const token = store.getState().token;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignOut = () => {
    window.location.href = "/login";
    dispatch(clearTokenData());
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <header>
      <nav className="main_nav">
        <Link className="main_nav_logo" href="/accueil">
          <img
            className="main_nav_logo_image"
            src="/images/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr_only">Argent Bank</h1>
        </Link>
        <div className="headerRight">
          <Link className="main_nav_item" href="/profile">
            <i className="fa fa_user_circle"></i>
            {user?.userData?.firstName}
          </Link>
          {token.tokenData && token.tokenData !== null ? (
            <button
              type="button"
              onClick={handleSignOut}
              className="main_nav_item_button"
            >
              <LogOut />
              Sign Out
            </button>
          ) : (
            <button
              type="button"
              onClick={handleLogin}
              className="main_nav_item_button"
            >
              <i className="fa fa_sign_out"></i>
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
