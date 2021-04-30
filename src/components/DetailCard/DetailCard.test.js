import { render } from '@testing-library/react'
import DetailCard from './DetailCard'

describe('DetailCard', () => {

    const obj1 = {
        name : 'Mario Rossi',
        hair_color : 'blond',
        eye_color : 'blue',
        birth_year : '2000',
        height : '200',
        mass : '80'
    }
    const obj2 = {
        name : 'Mario Rossi',
        classification : 'blond',
        language : 'italian',
        average_lifespan : '100',
        designation : '50'
    }

    test('renders with Obj1 without crashing', () => {
        const { getByText } = render(<DetailCard filter="people" character={obj1} />)
        expect( getByText('Mario Rossi') ).toBeInTheDocument();
        expect( getByText('Hair: blond') ).toBeInTheDocument();
        expect( getByText('200') ).toBeInTheDocument();
        expect( getByText('80') ).toBeInTheDocument();
    })      

    test('renders with Obj2 without crashing', () => {
        const { getByText } = render(<DetailCard filter="species" character={obj2} />)
        expect( getByText('Mario Rossi') ).toBeInTheDocument();
        expect( getByText('Classification: blond') ).toBeInTheDocument();
        expect( getByText('100') ).toBeInTheDocument();
        expect( getByText('50') ).toBeInTheDocument();
    })      

})