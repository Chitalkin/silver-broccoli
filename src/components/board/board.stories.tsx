import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SettingsConfig } from '@/configs';
import { Board } from './board';

export default {
  title: 'Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const SmallBoard = Template.bind({});
SmallBoard.args = {
  size: SettingsConfig.boardSizeConfig.small,
  percentage: SettingsConfig.randomFillPersentageConfig.none,
};

export const MediumBoard = Template.bind({});
MediumBoard.args = {
  size: SettingsConfig.boardSizeConfig.medium,
  percentage: SettingsConfig.randomFillPersentageConfig.none,
};

export const LargeBoard = Template.bind({});
LargeBoard.args = {
  size: SettingsConfig.boardSizeConfig.large,
  percentage: SettingsConfig.randomFillPersentageConfig.none,
};
