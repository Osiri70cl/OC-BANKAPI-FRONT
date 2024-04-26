"use client";

import { ReactNode, useEffect } from "react";
import { store } from "@/global/redux/store";
import { Provider, useDispatch } from "react-redux";
import ReduxComponent from "./Redux-component/ReduxComponent";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ReduxComponent>{children}</ReduxComponent>
    </Provider>
  );
};
export default Wrapper;
