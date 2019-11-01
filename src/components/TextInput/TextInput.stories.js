import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from './TextInput';

storiesOf('textInput', module)
    .add('small', () => <TextInput 
        placeholder="   Email"
        input="email"
        small
    />)
    .add('medium', () => <TextInput 
        placeholder="   Email"
        input="email"
        medium
    />)
    .add('large', () => <TextInput 
        placeholder="   Email"
        input="email"
        large
    />)