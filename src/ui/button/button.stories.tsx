import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonWithTimer } from './button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const ButtonWithTimerTemplate: ComponentStory<typeof ButtonWithTimer> = (
  args,
) => <ButtonWithTimer {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Default Button',
};

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  active: true,
  children: 'Active Button',
};

export const TimerButton = ButtonWithTimerTemplate.bind({});
TimerButton.args = {
  resetAfter: 1000,
  children: 'Timer Button',
};
