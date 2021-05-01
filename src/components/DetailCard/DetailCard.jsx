import PropTypes from 'prop-types';
import * as S from './DetailCard.styles'
import { ReactComponent as IconQuestion } from '../../assets/icons/question.svg'
import { ReactComponent as IconMale } from '../../assets/icons/male-sign.svg'
import { ReactComponent as IconFemale } from '../../assets/icons/female-sign.svg'
import { ReactComponent as IconRobot } from '../../assets/icons/robot-1.svg'
import { ReactComponent as IconUfo } from '../../assets/icons/ufo.svg'
import { ReactComponent as IconBug } from '../../assets/icons/bug.svg'


const DetailCard = (props) => {

    const {
        character,
        filter
    } = props

    const SwitchCase = (props) => {
        switch (props.value) {
            case 'male':
                return (<IconMale width="48" fill="#ff6458" stroke="#ff6458" viewBox="-2 0 65 60" />)
            case 'female':
                return (<IconFemale width="48" fill="#ff6458" stroke="#ff6458" />)
            case 'sentient':
                return (<IconUfo width="48" fill="#16a7cd" stroke="#16a7cd" />)
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
        <S.DetailCard active={character ? true : false} >
            {
                character ?
                    filter === 'people' ? (
                        <>
                            <S.Content>
                                <SwitchCase value={character.gender} />
                                <S.Name>{character.name}</S.Name>
                                <S.More>
                                    <p>Hair: {character.hair_color}</p>
                                    <p>Eye: {character.eye_color}</p>
                                    <p>Birth year: {character.birth_year}</p>
                                </S.More>
                            </S.Content>
                            <S.ContentFooter>
                                <div>
                                    <S.ContentFooterValue filter={filter} >{character.height}</S.ContentFooterValue>
                                    <S.ContentFooterLabel>height</S.ContentFooterLabel>
                                </div>
                                <div>
                                    <S.ContentFooterValue filter={filter} >{character.mass}</S.ContentFooterValue>
                                    <S.ContentFooterLabel>mass</S.ContentFooterLabel>
                                </div>
                            </S.ContentFooter>
                        </>
                    ) : (
                        <>
                            <S.Content>
                                <SwitchCase value={character.classification} />
                                <S.Name>{character.name}</S.Name>
                                <S.More>
                                    <p>Classification: {character.classification}</p>
                                    <p>Language: {character.language}</p>
                                    <p>
                                        <span>Skin color: </span>
                                        <S.ContentList>
                                            {character.skin_colors ? 
                                                // (character.skin_colors).replace('/, /g', '\n') 
                                                (character.skin_colors).replaceAll(', ','\n')
                                            : null}
                                        </S.ContentList>
                                    </p>
                                </S.More>
                            </S.Content>
                            <S.ContentFooter>
                                <div>
                                    <S.ContentFooterValue filter={filter} >{character.average_lifespan}</S.ContentFooterValue>
                                    <S.ContentFooterLabel>lifespan</S.ContentFooterLabel>
                                </div>
                                <div>
                                    <S.ContentFooterValue filter={filter} >{character.designation}</S.ContentFooterValue>
                                    <S.ContentFooterLabel>designation</S.ContentFooterLabel>
                                </div>
                            </S.ContentFooter>
                        </>
                    )
                    :
                    <S.Placeholder>
                        <div>
                            <IconQuestion width="64" stroke="#c7c7c7" fill="#c7c7c7" />
                            <S.PlaceholderText>Seleziona un personaggio per guardare la scheda</S.PlaceholderText>
                        </div>
                    </S.Placeholder>

            }
        </S.DetailCard>
    )
}

export default DetailCard


DetailCard.propTypes = {
    character: PropTypes.object,
    filter: PropTypes.string,
}