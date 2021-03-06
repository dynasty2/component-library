import React from 'react';
import './Button.css'
// This is a functional component - just sent up a little differently as an arrow function!
import Cart from '../Imports/cart_2.svg'
import heart from '../Imports/heart.svg'


const Button = (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success', 'warning', 'cart']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    if (props.large) {
        classList += ` button-large`
    }

    if (props.hover) {
        classList += ` button-hover`
    }
    if (props.hoverRed) {
        classList += ` button-hoverRed`
    }
    if (props.hoverGreen) {
        classList += ` button-hoverGreen`
    }
    if (props.hoverYellow) {
        classList += ` button-hoverYellow`
    }

    if (props.outline) {
        classList += ` button-outline`
    }
    if (props.outlineD) {
        classList += ` button-outlineD`
    }
    if (props.outlineS) {
        classList += ` button-outlineS`
    }
    if (props.outlineW) {
        classList += ` button-outlineW`
    }
    if (props.light) {
        classList += ` button-light`
    }
    if (props.lightD) {
        classList += ` button-lightD`
    }
    if (props.lightS) {
        classList += ` button-lightS`
    }
    if (props.lightW) {
        classList += ` button-lightW`
    }
    if (props.largeLight) {
        classList += ` button-largeLight`
    }
    if (props.largeLightD) {
        classList += ` button-largeLightD`
    }
    if (props.largeLightS) {
        classList += ` button-largeLightS`
    }
    if (props.largeLightW) {
        classList += ` button-largeLightW`
    }
    if (props.largeOutline) {
        classList += ` button-largeOutline`
    }
    if (props.largeOutlineD) {
        classList += ` button-largeOutlineD`
    }
    if (props.largeOutlineS) {
        classList += ` button-largeOutlineS`
    }
    if (props.largeOutlineW) {
        classList += ` button-largeOutlineW`
    }
    if (props.cart) {
        classList += ` button-cart`
            console.log({classList});
                return (
                     <button className={classList}>
                        <img className="cart" src={Cart}/>
                        {props.label}
                    </button>
            );
        } 
    if (props.cartSmall) {
        classList += ` button-cartSmall`
            console.log({classList});
                return (
                    <button className={classList}>
                         <img src={Cart}/>
                     </button>
            );
        }  
     if (props.heart) {
        classList += ` button-heart`
            console.log({classList});
                return (
                    <button className={classList}>
                        <img className="heart" src={heart}/>
                        {props.label}
                    </button>
            );
        }
    if (props.heartSmall) {
        classList += ` button-heartSmall`
            console.log({classList});
                return (
                    <button className={classList}>
                        <img src={heart}/>
                    </button>
            );
        }                                       
   return  <button className={classList}>
        {props.label}
    </button>
}


export default Button;