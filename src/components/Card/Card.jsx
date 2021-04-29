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
        border: 2px solid #707070; 
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
                return (<IconMale width="32" stroke="#ff6458" strokeWidth="2" />)
            case 'female':
                return (<IconFemale width="32" stroke="#ff6458" strokeWidth="2" />)
            case 'sentient':
                return (<IconUfo width="32" stroke="#16a7cd" strokeWidth="2" />)
            case 'mammal':
                return (<IconFemale width="32" stroke="#16a7cd" strokeWidth="2" />)
            case 'artificial':
                return (<IconRobot width="32" stroke="#16a7cd" strokeWidth="2" />)
            case 'gastropod':
                return (<IconBug width="32" stroke="#16a7cd" strokeWidth="2" />)
            default:
                return (<IconRobot width="32" stroke="#ff6458" strokeWidth="2" />)
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
