import CardPlaceholder from './Card.placeholder';

export default {
  title: 'Components/CardPlaceholder',
  component: CardPlaceholder,
};

const Template = (args) => <CardPlaceholder {...args} />;

export const Default = Template.bind({});
Default.args = {};
