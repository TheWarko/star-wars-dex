import * as S from './Viewer.styles'
import imgTitle from '../../assets/images/star_wars_title.svg'


const Viewer = () => {
    return (
        <S.Viewer>
            <S.TitleBox src={imgTitle} alt="STAR WARS" data-testid="logo-title" />
        </S.Viewer>
    )
}

export default Viewer
