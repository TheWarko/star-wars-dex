import { render, fireEvent } from '@testing-library/react'
import Filter from './Filter'


describe('Filter', () => {

    test('renders without crashing', () => {
        render(<Filter />)
    })

    test('On click the button',() => {
        const mockedHandler = jest.fn();
        const { getByTestId } = render(
            <Filter active="people" setFilter={mockedHandler} />
        );
        fireEvent.click(getByTestId("filter-people"));      
        fireEvent.click(getByTestId("filter-species"));
        expect(mockedHandler).toHaveBeenCalled();
    })

})
