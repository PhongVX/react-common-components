import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {DeleteIcon} from 'packages/icons';

//π This default export determines where your story goes in the story list
export default {
    /* π The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Icons/DeleteIcon',
    component: DeleteIcon,
  } as ComponentMeta<typeof DeleteIcon>;

  //π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof DeleteIcon> = (args) => <DeleteIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
    /*π The args you need here will depend on your component */
};

