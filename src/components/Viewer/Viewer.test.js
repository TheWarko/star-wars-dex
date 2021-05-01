import { render } from '@testing-library/react'
import Viewer from './Viewer'


describe('Viewer', () => {

    test('renders without crashing', () => {
        render(<Viewer />)
    })

})