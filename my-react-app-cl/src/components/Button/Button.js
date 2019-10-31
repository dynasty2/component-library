import React from 'react';
import './Button.css'
// This is a functional component - just sent up a little differently as an arrow function!

const Button = (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success', 'warning']
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
   return  <button className={classList}>
        {props.label}
    </button>
}

export default Button;