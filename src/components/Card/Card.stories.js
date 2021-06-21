import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    setCharacterActive: { action: 'button clicked' }
  }
};

const Template = (args) => <Card {...args} />;

export const Male = Template.bind({});
Male.args = {
  character: {
    name: 'Mario Rossi',
    gender: 'male'
  },
};

export const Female = Template.bind({});
Female.args = {
  character: {
    name: 'Maria Rossi',
    gender: 'female'
  },
};
