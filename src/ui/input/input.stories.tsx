import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  placeholder: 'input without label',
};

DefaultInput.parameters = {
  docs: {
    source: {
      code: '<Input placeholder="input without label" />',
    },
  },
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  label: 'Some label',
  placeholder: 'input with label',
};

InputWithLabel.parameters = {
  docs: {
    source: {
      code: '<Input label="some label" placeholder="input with label" />',
    },
  },
};
