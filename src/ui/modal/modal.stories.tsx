import { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from 'styled-components';
import { Modal } from './modal';

const ModalExample = styles.div`
  max-width: 400px;
  color: white;
  text-align: center;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 2px;
  padding 16px;
`;

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <ModalExample>Some content</ModalExample>
  </Modal>
);

export const ModalWithSimpleContent = Template.bind({});
ModalWithSimpleContent.args = {
  visible: true,
};
