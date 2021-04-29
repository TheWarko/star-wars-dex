import styled from 'styled-components'
import {breakpoints} from '../../utils/breakpoints'
import imgViewer from '../../assets/images/star_wars_heads.jpg'
import imgTitle from '../../assets/images/star_wars_title.svg'

const ScViewer = styled.div`
    height: 30vh;
    width: 100%;
    background-image: url(${imgViewer});
    background-size: contain;
    background-position-x: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${breakpoints.tablet}{
        height: 40vh;
    }
    @media ${breakpoints.desktop}{
        height: 424px;
    }
`

const ScTitleBox = styled.img`
    background-color: #fff;
    border: 2px solid #CCCCCC;
    max-width: 80%;
` 

const Viewer = () => {
    return (
        <ScViewer>
            <ScTitleBox src={imgTitle} alt="STAR WARS" />
        </ScViewer>
    )
}

export default Viewer
