import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>
      <ItemCount stock={5} initial={1} />
    </div>
  );
};
