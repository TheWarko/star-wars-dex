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
        render(<Card character={obj} setCharacterActive={handleClick} active={false} placeholder="clickme" />)
        fireEvent.click(screen.getByTestId('card'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

})