import {
  CartItemContainer,
  ImageStyled,
  ItemDetails,
  Name,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <ImageStyled src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name className='name'>{name}</Name>
        <span>
          {quantity} x {price}kr
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
