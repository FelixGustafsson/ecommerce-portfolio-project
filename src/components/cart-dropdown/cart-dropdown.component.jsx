import {
  EmptyMessage,
  CartItems,
  CartDropdownContainer,
  ButtonStyled,
} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      {cartItems.length > 0 ? (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </CartItems>
      ) : (
        <EmptyMessage>Empty</EmptyMessage>
      )}
      <ButtonStyled onClick={goToCheckoutHandler}>Checkout</ButtonStyled>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
