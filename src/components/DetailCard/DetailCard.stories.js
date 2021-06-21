import DetailCard from './DetailCard';

export default {
  title: 'Components/DetailCard',
  component: DetailCard,
};

const Template = (args) => <DetailCard {...args} />;

export const People = Template.bind({});
People.args = {
  filter: 'people',
  character: {
    name : 'Mario Rossi',
    hair_color : 'blond',
    eye_color : 'blue',
    birth_year : '2000',
    height : '200',
    mass : '80'
  }
};

export const Species = Template.bind({});
Species.args = {
  filter: 'species',
  character: {
    name : 'Mario Rossi',
    classification : 'blond',
    language : 'italian',
    skin_colors : 'rosso, giallo, rosa, nero, blu',
    average_lifespan : '100',
    designation : '50'
  }
};