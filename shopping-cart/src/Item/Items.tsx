import Button from "@mui/material/Button";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./Items.style";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
  </Wrapper>
);

export default Item;
