import styled,{ css } from 'styled-components'
import {ReactComponent as IconMale} from '../../assets/icons/male-sign.svg'
import {ReactComponent as IconFemale} from '../../assets/icons/female-sign.svg'
import {ReactComponent as IconRobot} from '../../assets/icons/robot-1.svg'
import {ReactComponent as IconUfo} from '../../assets/icons/ufo.svg'
import {ReactComponent as IconBug} from '../../assets/icons/bug.svg'



const $Card = styled.div`
    background-color: #fff;
    border: 1px solid #D5DADF; 
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    ${props => props.active && css`
        border: 2px solid ${props => props.theme.basicColor}; 
    `}
`
const $Name = styled.p`
    font-size: 15px;
    font-weight: 500;
`
const $Gender = styled.p`
    font-size: 15px;
    color: #7C7C7C;
`


const Card = (props) => {
    const {
        character,
        setCharacterActive
    } = props

    const SwitchCase = (props) => {
        switch (props.value) {
            case 'male':
                return (<IconMale width="32" fill="#ff6458" stroke="#ff6458" viewBox="-2 0 65 60" />)
            case 'female':
                return (<IconFemale width="32" fill="#ff6458" stroke="#ff6458" />)
            case 'sentient':
                return (<IconUfo width="32"  fill="#16a7cd" stroke="#16a7cd" />)
            case 'mammal':
                return (<IconFemale width="32" fill="#16a7cd" stroke="#16a7cd" />)
            case 'artificial':
                return (<IconRobot width="32" fill="#16a7cd" stroke="#16a7cd" />)
            case 'gastropod':
                return (<IconBug width="32" fill="#16a7cd" stroke="#16a7cd" />)
            default:
                return (<IconRobot width="32" fill="#ff6458" stroke="#ff6458" />)
        }
    }

    return (
        <$Card onClick={() => setCharacterActive(character)} active={props.active} >
            <div>
                <SwitchCase value={character.gender || character.classification} />
                <$Name>{character.name}</$Name>
                <$Gender>{character.gender || character.classification}</$Gender>
            </div>
        </$Card>
    )
}

export default Card
