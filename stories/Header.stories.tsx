import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '../components/Header';
import {action} from "@storybook/addon-actions";

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderOpenedHamburger = Template.bind({});
HeaderOpenedHamburger.args = {
  isOpened: true,
  toggleDrawer: action('toggleDrawer'),
};

export const HeaderClosedHamburger = Template.bind({});
HeaderClosedHamburger.args = {
  isOpened: false,
  toggleDrawer: action('toggleDrawer'),
};
