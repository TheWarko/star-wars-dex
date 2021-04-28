import styled from 'styled-components'
import {ReactComponent as IconQuestion} from '../../assets/icons/question.svg'


const $DetailCard = styled.div`
    background-color: #fff;
    border: 1px solid #D5DADF; 
    text-align: center;
    min-height: 365px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const $PlaceholderText = styled.p`
    font-style: italic;
    color: #c7c7c7;
`

const DetailCard = () => {
    return (
        <$DetailCard>
            <div>
                <IconQuestion width="64" stroke="#c7c7c7" stroke-width="2" fill="#c7c7c7" />
                <$PlaceholderText>Seleziona un personaggio per guardare la scheda</$PlaceholderText>
            </div>
        </$DetailCard>
    )
}

export default DetailCard
