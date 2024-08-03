import { Params, useParams } from "react-router-dom";
import { AdidasItem, adidasArr } from "./pages/Adidas";
import { PumaItem, pumaArr } from "./pages/Puma";

type CrossModels = {
  [key: string]: AdidasItem[] | PumaItem[];
};

const crossModels: CrossModels = {
  adidas: adidasArr,
  puma: pumaArr,
};

export const DescriptionOfSnickers = () => {
  const { model, id }: Readonly<Params<string>> = useParams();

  const snickers =
    model !== undefined ? crossModels[model].find((el) => el.id === Number(id)) : undefined;
  console.log(snickers);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {snickers ? (
        <>
          <h2>{snickers.model}</h2>
          <p>{snickers.collection}</p>
          <p>{snickers.price}</p>
          <img src={snickers.picture} alt="" style={{ width: "500px", textAlign: "center" }} />
        </>
      ) : (
        <h2>Такой модели не существует</h2>
      )}
    </div>
  );
};
