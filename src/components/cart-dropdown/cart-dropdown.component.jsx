import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CustomButton from "../custom-button/custom-button.component";
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


const CartDropdown = ({ cartItems, dispatch }) => {


    let navigate = useNavigate();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ?

                    (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    ) : (<span className="empty-message">Your cart is empty</span>)}

            </div>
            <CustomButton onClick={() => {
                (navigate('/checkout'));
                dispatch(toggleCartHidden())
            }
            }>
                Go to checkout
            </CustomButton>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

