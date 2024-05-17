"use client";
import { clearTokenData } from "@/global/redux/reducers/tokenSlice";
import { store } from "@/global/redux/store";
import { deleteCookie, getCookie } from "cookies-next";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const user = store.getState().user;
  const token = store.getState().token;
  const dispatch = useDispatch();
  const router = useRouter();
  const [isToken, setIsToken] = useState(false);

  const handleSignOut = () => {
    window.location.href = "/login";
    dispatch(clearTokenData());
    deleteCookie("token");
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  useEffect(() => {
    if (getCookie("token") || token?.tokenData?.token) {
      setIsToken(true);
    }
  }, [getCookie("token"), token?.tokenData]);

  const renderLoginButton = useMemo(() => {
    if (!isToken) {
      return (
        <button
          type="button"
          onClick={handleLogin}
          className="main_nav_item_button"
        >
          <i className="fa fa_sign_out"></i>
          Login
        </button>
      );
    } else {
      return (
        <button
          type="button"
          onClick={handleSignOut}
          className="main_nav_item_button"
        >
          <LogOut />
          Sign Out
        </button>
      );
    }
  }, [isToken]);

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
          {renderLoginButton}
        </div>
      </nav>
    </header>
  );
};

export default Header;
