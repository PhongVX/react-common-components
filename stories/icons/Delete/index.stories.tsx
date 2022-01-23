import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {DeleteIcon} from 'packages/icons';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Icons/DeleteIcon',
    component: DeleteIcon,
  } as ComponentMeta<typeof DeleteIcon>;

  //👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof DeleteIcon> = (args) => <DeleteIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
    /*👇 The args you need here will depend on your component */
};

