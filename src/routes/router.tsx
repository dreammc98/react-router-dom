import { Navigate, Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { Adidas } from "../components/pages/Adidas";
import { DescriptionOfSnickers } from "../components/DescriptionOfSnickers";
import { Error404 } from "../components/pages/Error404";
import { Prices } from "../components/pages/Prices";
import { Abibas } from "../components/pages/Abibas";
import { Puma } from "../components/pages/Puma";
import App from "../App";
import { ProtectedPage } from "../components/pages/ProtectedPage";
// import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/pages/Login";

export const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICE: "/price",
  PROTECTED: "/protected",
  LOGIN: "/login",
  MODEL: "/:model/:id",
  ERROR: "/error404",
} as const;

const publicRoutes: RouteObject[] = [
  { path: "/", element: <Navigate to={PATH.ADIDAS} /> },
  { path: PATH.ADIDAS, element: <Adidas /> },
  { path: PATH.PUMA, element: <Puma /> },
  { path: PATH.ABIBAS, element: <Abibas /> },
  { path: PATH.PRICE, element: <Prices /> },
  { path: PATH.LOGIN, element: <Login /> },
  { path: PATH.MODEL, element: <DescriptionOfSnickers /> },
  { path: PATH.ERROR, element: <Error404 /> },
  { path: "/*", element: <Error404 /> },
];

const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED,
    element: <ProtectedPage />,
  },
];

export const PrivateRoute = () => {
  const isAuth = true;

  return <>{isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />}</>;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR} />,

    children: [{ element: <PrivateRoute />, children: privateRoutes }, ...publicRoutes],
  },
]);

// <Routes>
// <Route path="/" element={<Navigate to={PATH.PAGE1} />} />
// <Route path={PATH.PAGE1} element={<Adidas />} />
// <Route path={PATH.PAGE2} element={<Puma />} />
// <Route path={PATH.PAGE3} element={<Abibas />} />
// <Route path={PATH.PRICE} element={<Prices />} />
// <Route path={PATH.ERROR} element={<Error404 />} />
// <Route path={"/:model/:id"} element={<DescriptionOfSnickers />} />
// <Route path="/*" element={<Navigate to={PATH.ERROR} />} />
// </Routes>

// { path: PATH.ADIDAS, element: <Adidas /> },
// { path: PATH.PUMA, element: <Puma /> },
// { path: PATH.ABIBAS, element: <Abibas /> },
// { path: PATH.PRICE, element: <Prices /> },
// {
//   path: PATH.PROTECTED,
//   element: (
//     <ProtectedRoute>
//       <ProtectedPage />
//     </ProtectedRoute>
//   ),
// },
// { path: PATH.LOGIN, element: <Login /> },
// { path: PATH.MODEL, element: <DescriptionOfSnickers /> },
// { path: PATH.ERROR, element: <Error404 /> },
// { path: "/*", element: <Error404 /> },
