import { render } from '@testing-library/react'
import Cards from './Cards'


describe('Cards', () => {

    test('renders without crashing', () => {
        render(<Cards />)
    })

})