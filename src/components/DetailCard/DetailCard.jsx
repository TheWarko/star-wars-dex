import styled,{ css } from 'styled-components'
import {ReactComponent as IconQuestion } from '../../assets/icons/question.svg'
import {ReactComponent as IconMale} from '../../assets/icons/male-sign.svg'
import {ReactComponent as IconFemale} from '../../assets/icons/female-sign.svg'
import {ReactComponent as IconRobot} from '../../assets/icons/robot-1.svg'
import {ReactComponent as IconUfo} from '../../assets/icons/ufo.svg'
import {ReactComponent as IconBug} from '../../assets/icons/bug.svg'

const ScDetailCard = styled.div`
    background-color: #fff;
    border: 1px solid #D5DADF; 
    width: 100%;
    ${props => props.active && css`
        border: 2px solid ${props => props.theme.basicColor}; 
    `}
`
const ScPlaceholder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 365px;
    text-align: center;
`
const ScContent = styled.div`
    text-align: left;
    padding: 50px 30px 30px;
`
const ScPlaceholderText = styled.p`
    font-style: italic;
    color: #c7c7c7;
    padding: 0 20px;
`
const ScName = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;
`
const ScMore = styled.div`
    font-size: 15px;
    line-height: 25px;
    color: #7C7C7C;
    p{ margin: 0}
`
const ScContentFooter = styled.div`
    background-color: #fbfbfb;
    display: flex;
    &> div{
        width: 50%;
        padding: 20px;
    }
`
const ScContentFooterValue = styled.p`
    color: red;
    margin: 0;
    line-height: 25px;
`
const ScContentFooterLabel = styled.p`
    font-weight: 700;
    margin: 0;
    line-height: 25px;
`


const DetailCard = (props) => {

    const {
        character
    } = props

    const SwitchCase = (props) => {
        switch (props.value) {
            case 'male':
                return (<IconMale width="48" fill="#ff6458" stroke="#ff6458" viewBox="-2 0 65 60" />)
            case 'female':
                return (<IconFemale width="48" fill="#ff6458" stroke="#ff6458" />)
            case 'sentient':
                return (<IconUfo width="48"  fill="#16a7cd" stroke="#16a7cd" />)
            case 'mammal':
                return (<IconFemale width="48" fill="#16a7cd" stroke="#16a7cd" />)
            case 'artificial':
                return (<IconRobot width="48" fill="#16a7cd" stroke="#16a7cd" />)
            case 'gastropod':
                return (<IconBug width="48" fill="#16a7cd" stroke="#16a7cd" />)
            default:
                return (<IconRobot width="48" fill="#ff6458" stroke="#ff6458" />)
        }
    }

    return (
        <ScDetailCard active={character ? true : false} >
            {
                character ?
                    <>
                        <ScContent>
                            <SwitchCase value={character.gender || character.classification} />
                            <ScName>{character.name}</ScName>
                            <ScMore>
                                <p>Hair: {character.hair_color}</p>
                                <p>Eye: {character.eye_color}</p>
                                <p>Birth year: {character.birth_year}</p>
                            </ScMore>
                        </ScContent>
                        <ScContentFooter>
                            <div>
                                <ScContentFooterValue>{character.height}</ScContentFooterValue>
                                <ScContentFooterLabel>height</ScContentFooterLabel>
                            </div>
                            <div>
                                <ScContentFooterValue>{character.mass}</ScContentFooterValue>
                                <ScContentFooterLabel>mass</ScContentFooterLabel>
                            </div>
                        </ScContentFooter>
                    </>
                    :
                    <ScPlaceholder>
                        <div>
                            <IconQuestion width="64" stroke="#c7c7c7" fill="#c7c7c7" />
                            <ScPlaceholderText>Seleziona un personaggio per guardare la scheda</ScPlaceholderText>
                        </div>
                    </ScPlaceholder>

            }
        </ScDetailCard>
    )
}

export default DetailCard
