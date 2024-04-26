"use client";
import { useRouter } from "next/router";
import { use, useEffect, useMemo, useState } from "react";
import { set, useForm } from "react-hook-form";
import { setCookie } from "cookies-next";
import { fetchGetUserInfo, fetchUpdateUserInfo } from "@/api/profil/route";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "@/global/redux/reducers/userSlice";
import { store } from "@/global/redux/store";
import axios from "axios";

const ProfilComponent = () => {
  const [nameChange, setNameChange] = useState(false);
  const user = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.token);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user?.userData?.firstName,
      lastName: user?.userData?.lastName,
    },
  });

  const onSubmit = (data: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token?.tokenData?.token}`,
      },
    };
    axios
      .put("http://localhost:3001/api/v1/user/profile", data, config)
      .then((res) => {
        console.log(res);
        setNameChange(false);
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
  };

  useEffect(() => {
    if (!token?.tokenData?.token) {
      window.location.href = "/login";
    }
  }, [token?.tokenData?.token]);

  const handleNameChange = () => {
    setNameChange(!nameChange);
  };

  const renderNameChange = useMemo(() => {
    console.log(nameChange);
    if (nameChange) {
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="width100">
            <div className="input_wrapper">
              <label>First name</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="input_wrapper">
              <label>Last name</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
              />
            </div>
            <button type="submit" className="edit_button">
              Save
            </button>
          </div>
        </form>
      );
    } else {
      return (
        <>
          <h1>
            Welcome back
            <br />
            {user?.userData?.firstName} {user?.userData?.lastName} !
          </h1>
          <button onClick={handleNameChange} className="edit_button">
            Edit Name
          </button>
        </>
      );
    }
  }, [nameChange]);

  return (
    <main className="main bg_dark">
      <div className="header">
        {renderNameChange}
        <div>{user && user !== null}</div>
      </div>
      <h2 className="sr_only">Accounts</h2>
      <section className="account">
        <div className="account_content_wrapper">
          <h3 className="account_title">Argent Bank Checking (x8349)</h3>
          <p className="account_amount">$2,082.79</p>
          <p className="account_amount_description">Available Balance</p>
        </div>
        <div className="account_content_wrapper cta">
          <button className="transaction_button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account_content_wrapper">
          <h3 className="account_title">Argent Bank Savings (x6712)</h3>
          <p className="account_amount">$10,928.42</p>
          <p className="account_amount_description">Available Balance</p>
        </div>
        <div className="account_content_wrapper cta">
          <button className="transaction_button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account_content_wrapper">
          <h3 className="account_title">Argent Bank Credit Card (x8349)</h3>
          <p className="account_amount">$184.30</p>
          <p className="account_amount_description">Current Balance</p>
        </div>
        <div className="account_content_wrapper cta">
          <button className="transaction_button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default ProfilComponent;
