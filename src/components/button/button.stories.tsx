import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Default Button',
};

export const ButtonWithActiveClassName = Template.bind({});
ButtonWithActiveClassName.args = {
  className: 'active',
  children: 'Active Button',
};
