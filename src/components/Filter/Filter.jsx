import PropTypes from 'prop-types';
import * as S from './Filter.styles'


const Filter = (props) => {

    const {
        active,
        setFilter
    } = props

    return (
        <S.Filter>
            <label>Filtra per</label> 
            <S.ButtonRed active={active === 'people'} onClick={() => {setFilter('people')}} data-testid="filter-people" >People</S.ButtonRed>
            <S.ButtonBlue active={active === 'species'} onClick={() => {setFilter('species')}} data-testid="filter-species" >Species</S.ButtonBlue>
        </S.Filter>
    )
}

export default Filter


Filter.propTypes = {
    active: PropTypes.string,
    setFilter: PropTypes.func,
}