import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button 
        label="Primary" 
        type="primary"
    />)
    .add('Danger', () => <Button 
        label="Danger" 
        type="danger"
    />)
    .add('Success', () => <Button
        label="Success"
        type="success"
    />)
    .add('Warning', () => <Button
        label="Warning"
        type="warning"
    />)
    .add('Large Primary', () => <Button
        label="Large Primary"
        type="primary"
        large
    />)
    .add('Large Danger', () => <Button
        label="Large Danger"
        type="danger"
        large
    />)
    .add('Large Success', () => <Button
        label="Large Success"
        type="success"
        large
    />)
    .add('Large Warning', () => <Button
        label="Large Warning"
        type="warning"
        large
    />)
    .add('Primary Hover', () => <Button
    label="Primary Hover"
    type="primary"
    hover
    />)
    .add('Danger Hover', () => <Button
        label="Danger Hover"
        type="danger"
        hoverRed
    />)
    .add('Success Hover', () => <Button
        label="Success Hover"
        type="success"
        hoverGreen
    />)
    .add('Warning Hover', () => <Button
        label="Warning Hover"
        type="warning"
        hoverYellow
    />)
    .add('Primary Outline', () => <Button
        label="Primary Outline"
        type="primary"
        outline
    />)