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
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
    /*👇 The args you need here will depend on your component */
};
