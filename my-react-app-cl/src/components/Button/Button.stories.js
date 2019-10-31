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
    .add('Danger Outline', () => <Button
        label="Danger Outline"
        type="danger"
        outlineD
    />)
    .add('Success Outline', () => <Button
        label="Success Outline"
        type="success"
        outlineS
    />)
    .add('Warning Outline', () => <Button
        label="Warning Outline"
        type="warning"
        outlineW
    />)
    .add('Primary Light', () => <Button
        label="Primary Light"
        type="primary"
        light
    />)
    .add('Danger Light', () => <Button
        label="Primary Light"
        type="danger"
        lightD
    />)
    .add('Success Light', () => <Button
        label="Primary Light"
        type="success"
        lightS
    />)
    .add('Warning Light', () => <Button
        label="Primary Light"
        type="warning"
        lightW
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
    .add('Large Primary Light', () => <Button
        label="Large Primary Light"
        type="primary"
        largeLight
    />)
    .add('Large Danger Light', () => <Button
        label="Large Danger Light"
        type="danger"
        largeLightD
    />)
    .add('Large Success Light', () => <Button
        label="Large Success Light"
        type="success"
        largeLightS
    />)
    .add('Large Warning Light', () => <Button
        label="Large Warning Light"
        type="warning"
        largeLightW
    />)
    .add('Large Primary Outline', () => <Button
        label="Large Primary Outline"
        type="primary"
        largeOutline
    />)
    .add('Large Danger Outline', () => <Button
        label="Large Danger Outline"
        type="danger"
        largeOutlineD
    />)
    .add('Large Success Outline', () => <Button
        label="Large Success Outline"
        type="success"
        largeOutlineS
    />)
    .add('Large Warning Outline', () => <Button
        label="Large Warning Outline"
        type="warning"
        largeOutlineW
    />)