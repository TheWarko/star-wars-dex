import Filter from './Filter'

// [themeDecorator] to import styled-components theme styles in storybook (N.B. include it only one time in project)
import { addDecorator } from "@storybook/react"
import themeDecorator from "../../../.storybook/themeDecorator"
addDecorator(themeDecorator);


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