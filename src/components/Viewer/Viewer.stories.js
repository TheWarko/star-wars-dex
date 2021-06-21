import Viewer from './Viewer';

export default {
  title: 'Components/Viewer',
  component: Viewer,
};

const Template = (args) => <Viewer {...args} />;

export const Default = Template.bind({});
Default.args = {};
