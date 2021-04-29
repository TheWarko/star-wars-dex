import styled,{css} from 'styled-components'
import iconCorrect from '../../assets/icons/correct.png'

const ScFilter = styled.div`
    label{
        font-size: 15px;
        font-weight: 700;
        color: #7C7C7C;
    }
`
const ScButtonFilter = styled.button`
    color: ${props => props.theme.basicColor};
    font-weight: 700;
    border: 2px solid ${props => props.theme.basicColor};
    display: inline-block;
    border-radius: 30px;
    padding: 4px 8px;
    font-size: 13px;
    cursor: pointer;
    margin-left: 10px;
    ${props => props.active && css`
        cursor: default;
        color: #fff;
        background: url(${iconCorrect}) ${props => props.theme.basicColor} no-repeat;
        background-size: 12px;
        background-position: 5px center;
        padding-left: 20px;
    `}
`
const ScButtonRed = styled(ScButtonFilter)`
    color: ${props => props.theme.firstColor};
    border: 2px solid ${props => props.theme.firstColor};
    ${props => props.active && css`
        background-color: ${props => props.theme.firstColor};
        color: #fff;
    `}
`
const ScButtonBlue = styled(ScButtonFilter)`
    color: ${props => props.theme.secondColor};
    border: 2px solid ${props => props.theme.secondColor};
    ${props => props.active && css`
        background-color: ${props => props.theme.secondColor};
        color: #fff;
    `}
`

const Filter = (props) => {

    const {
        active,
        setFilter
    } = props

    return (
        <ScFilter>
            <label>Filtra per</label> 
            <ScButtonRed active={active === 'people'} onClick={() => {setFilter('people')}} >People</ScButtonRed>
            <ScButtonBlue active={active === 'species'} onClick={() => {setFilter('species')}}>Species</ScButtonBlue>
        </ScFilter>
    )
}

export default Filter
