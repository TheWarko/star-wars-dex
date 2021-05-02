import { render, screen, fireEvent } from '@testing-library/react'
import Card from './Card'


describe('Card', () => {

    const obj = {
        'name' : 'Mario Rossi',
        'gender' : 'male'
    }

    test('renders without crashing', () => {
        const { getByText } = render(<Card character={obj} />)
        expect( getByText('Mario Rossi') ).toBeInTheDocument();
        expect( getByText('male') ).toBeInTheDocument();
    })

    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn()
        const {getByTestId} = render(<Card character={obj} setCharacterActive={handleClick} active={false} placeholder="clickme" />)
        fireEvent.click(getByTestId('card'))
        expect(handleClick).toHaveBeenCalled();
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

})