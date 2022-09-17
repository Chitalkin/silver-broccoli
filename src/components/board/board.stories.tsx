import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EBoardSize } from '@/configs';
import { Board } from './board';

export default {
  title: 'Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const SmallBoard = Template.bind({});
SmallBoard.args = {
  size: EBoardSize.Small,
};

export const MediumBoard = Template.bind({});
MediumBoard.args = {
  size: EBoardSize.Medium,
};

export const LargeBoard = Template.bind({});
LargeBoard.args = {
  size: EBoardSize.Large,
};
