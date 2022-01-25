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
    label: 'Default',
    // name: 'default',
    // type: 'text',
};
