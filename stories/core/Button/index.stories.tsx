import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Button} from 'packages/core';
//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Core/Button',
    component: Button,
  } as ComponentMeta<typeof Button>;

  //👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} > Button </Button>;

export const Default = Template.bind({});

Default.args = {
    /*👇 The args you need here will depend on your component */
};

export const Primary = Template.bind({});

Primary.args = {
    /*👇 The args you need here will depend on your component */
    color: 'primary'
};

export const Secondary = Template.bind({});

Secondary.args = {
    /*👇 The args you need here will depend on your component */
    color: 'secondary'
};


export const Disabled = Template.bind({});

Disabled.args = {
    disabled: true
};

export const SizeSmall = Template.bind({});

SizeSmall.args = {
    size: 'small'
};

export const SizeMedium = Template.bind({});

SizeMedium.args = {
    size: 'medium'
};

export const SizeLarge = Template.bind({});

SizeLarge.args = {
    size: 'large'
};

const ClickMe: ComponentStory<typeof Button> = (args) => <Button {...args} > Click Me </Button>;

export const OnClick = ClickMe.bind({});

OnClick.args = {
    onClick: () => { alert('Hello World!')}
};
