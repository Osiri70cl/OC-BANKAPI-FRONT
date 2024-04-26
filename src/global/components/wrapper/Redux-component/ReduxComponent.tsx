"use client";
import { fetchGetUserInfo } from "@/api/profil/route";
import { setUserData } from "@/global/redux/reducers/userSlice";
import { store } from "@/global/redux/store";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ReduxComponent = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token?.tokenData?.token}`,
      },
    };

    axios
      .post("http://localhost:3001/api/v1/user/profile", {}, config)
      .then((res) => {
        dispatch(
          setUserData({
            firstName: res.data.body.firstName,
            lastName: res.data.body.lastName,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token?.tokenData?.token]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ReduxComponent;
