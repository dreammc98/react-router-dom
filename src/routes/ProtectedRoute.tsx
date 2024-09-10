import { Navigate } from "react-router-dom";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { PATH } from "./router";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const logged = true;

  return <>{logged ? children : <Navigate to={PATH.LOGIN} />}</>;
};
