import React from 'react';
import './TextInput.css'

const TextInput = (props) => {
    let classList = ''
    // let types = ['small', 'medium', 'large']
    if (props.small) {
        classList += ` textInput-small`
    }
    if (props.medium) {
        classList += ` textInput-medium`
    }
    if (props.large) {
        classList += ` textInput-large`
    }
    return ( <input className={classList} type="text" placeholder={props.placeholder}/>  
    )
}

export default TextInput;