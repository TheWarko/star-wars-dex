import Filter from './Filter'


export default {
    title: 'Components/Filter',
    component: Filter,
    argTypes: {
        setFilter: { action: 'button clicked' }
    }
}

const Template = (args) => <Filter {...args} />

export const People = Template.bind({})
People.args = {
    active: 'people',
}

export const Species = Template.bind({})
Species.args = {
    active: 'species',
}