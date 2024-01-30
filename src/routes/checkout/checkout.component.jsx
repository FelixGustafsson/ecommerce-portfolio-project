import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, totalPriceOfCart } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <div className='header-block'>Description</div>
        <div className='header-block'>Quantity</div>
        <div className='header-block'>Price</div>
        <div className='header-block'>Remove</div>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: {totalPriceOfCart}kr</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
