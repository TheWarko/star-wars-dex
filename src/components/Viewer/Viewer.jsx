import React from 'react'
import styled from 'styled-components'
import imgViewer from '../../assets/images/star_wars_heads.jpg'
import imgTitle from '../../assets/images/star_wars_title.svg'

const $Viewer = styled.div`
    height: 424px;
    width: 100%;
    background-image: url(${imgViewer});
    background-size: contain;
    background-position-x: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const $TitleBox = styled.img`
    background-color: #fff;
    border: 2px solid #CCCCCC;
    max-width: 80%;
` 

const Viewer = () => {
    return (
        <$Viewer>
            <$TitleBox src={imgTitle} alt="STAR WARS" />
        </$Viewer>
    )
}

export default Viewer
