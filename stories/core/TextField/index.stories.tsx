import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TextField} from 'packages/core';

export default {
    title: 'Core/TextField',
    component: TextField,
  } as ComponentMeta<typeof TextField>;

  //👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Default'
};

export const FullWidth = Template.bind({});

FullWidth.args = {
    label: 'Full width',
    fullWidth: true
};


export const Password = Template.bind({});

Password.args = {
    label: 'Password',
    type: 'password',
    fullWidth: true
};

export const Error = Template.bind({});

Error.args = {
    label: 'Error',
    type: 'text',
    fullWidth: true,
    error: true,
    defaultValue: 'Hello'
};

export const ErrorWithHelperText = Template.bind({});

ErrorWithHelperText.args = {
    label: 'Error with helpertext',
    type: 'text',
    fullWidth: true,
    error: true,
    helperText: 'An error has occurred',
    defaultValue: 'Hello World'
};
