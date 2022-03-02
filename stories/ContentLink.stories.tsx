import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContentLink from "../components/ContentLink";

export default {
  title: 'Components/ContentLink',
  component: ContentLink,
} as ComponentMeta<typeof ContentLink>;

const Template: ComponentStory<typeof ContentLink> = (args) => <ContentLink {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Title normal length',
  subtext: 'Subtext',
  imgUrl: 'https://www.hola.com/imagenes/destacadas/163-1643215223-benidorm-fest1-c.jpg',
  url: 'https://finladomain.com/finalurl',
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: 'Title normal length',
  imgUrl: 'https://www.hola.com/imagenes/destacadas/163-1643215223-benidorm-fest1-c.jpg',
  url: 'https://finladomain.com/finalurl',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Title normal length',
  subtext: 'Subtext',
  url: 'https://finladomain.com/finalurl',
};
