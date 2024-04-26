"use client";
import { fetchPostLogin, fetchPostSignup } from "@/api/auth/route";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setUserData } from "@/global/redux/reducers/userSlice";
import axios from "axios";
import { redirect } from "next/navigation";
import { setTokenData } from "@/global/redux/reducers/tokenSlice";

const LoginComponent = () => {
  console.log("LoginComponent");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    axios
      .post("http://localhost:3001/api/v1/user/login", data)
      .then((res) => {
        if (res) {
          dispatch(
            setTokenData({
              token: res.data.body.token,
            })
          );
        } else {
          console.log("error");
        }
      })
      .then(() => {
        router.push("/profile");
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
      });
  };

  return (
    <main className="main bg_dark">
      <section className="sign_in_content">
        <i className="fa fa_user_circle sign_in_icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_wrapper">
            <label>Username</label>
            <input
              type="email"
              id="username"
              {...register("username", { required: true })}
            />
          </div>
          <div className="input_wrapper">
            <label>Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {error && <p className="errorMsg">{error}</p>}
          </div>
          {/* <div className="input_remember">
            <input type="checkbox" id="remember_me" />
            <label for="remember_me">Remember me</label>
          </div> */}
          {/* <!_ PLACEHOLDER DUE TO STATIC SITE _> */}
          <button type="submit" className="sign_in_button">
            Sign In
          </button>
          {/* <!_ SHOULD BE THE BUTTON BELOW _>
          <!_ <button className="sign_in_button">Sign In</button> _>
          <!_  _> */}
        </form>
      </section>
    </main>
  );
};

export default LoginComponent;
