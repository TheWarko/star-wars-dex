import { render, screen } from '@testing-library/react'
import Viewer from './Viewer'


describe('Viewer', () => {

    test('renders without crashing', () => {
        render(<Viewer />)
    })

    test('image is present', () => {
        const { getByTestId } = render( <Viewer /> );
        expect(getByTestId('logo-title')).toHaveAttribute('alt', 'STAR WARS');
    })

})