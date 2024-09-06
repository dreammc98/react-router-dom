import { Navigate, createBrowserRouter } from "react-router-dom";
import { Adidas } from "../components/pages/Adidas";
import { DescriptionOfSnickers } from "../components/DescriptionOfSnickers";
import { Error404 } from "../components/pages/Error404";
import { Prices } from "../components/pages/Prices";
import { Abibas } from "../components/pages/Abibas";
import { Puma } from "../components/pages/Puma";
import App from "../App";

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICE: "/price",
  MODEL: "/:model/:id",
  ERROR: "/error404",
} as const;
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,

    children: [
      { path: PATH.ADIDAS, element: <Adidas /> },
      { path: PATH.PUMA, element: <Puma /> },
      { path: PATH.ABIBAS, element: <Abibas /> },
      { path: PATH.PRICE, element: <Prices /> },
      { path: PATH.ERROR, element: <Error404 /> },
      { path: PATH.MODEL, element: <DescriptionOfSnickers /> },
    ],
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
