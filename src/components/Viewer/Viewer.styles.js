import styled from 'styled-components'
import {breakpoints} from '../../utils/breakpoints'
import imgViewer from '../../assets/images/star_wars_heads.jpg'


export const Viewer = styled.div`
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
export const TitleBox = styled.img`
    background-color: #fff;
    border: 2px solid #CCCCCC;
    max-width: 80%;
` 