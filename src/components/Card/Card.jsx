import PropTypes from 'prop-types';
import * as S from './Card.styles'
import {ReactComponent as IconMale} from '../../assets/icons/male-sign.svg'
import {ReactComponent as IconFemale} from '../../assets/icons/female-sign.svg'
import {ReactComponent as IconRobot} from '../../assets/icons/robot-1.svg'
import {ReactComponent as IconUfo} from '../../assets/icons/ufo.svg'
import {ReactComponent as IconBug} from '../../assets/icons/bug.svg'


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
        <S.Card onClick={() => setCharacterActive(character)} active={props.active} data-testid="card" >
            <div>
                <SwitchCase value={character.gender || character.classification} />
                <S.Name>{character.name}</S.Name>
                <S.Gender>{character.gender || character.classification}</S.Gender>
            </div>
        </S.Card>
    )
}

export default Card


Card.propTypes = {
    character: PropTypes.object,
    setCharacterActive: PropTypes.func,
}