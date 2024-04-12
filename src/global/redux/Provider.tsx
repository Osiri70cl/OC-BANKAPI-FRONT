"use client";
import { Provider } from "react-redux";
import { store } from "./store";
type Props = {
  children: React.ReactNode;
  user: any;
};

function Providers({ children, user }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
