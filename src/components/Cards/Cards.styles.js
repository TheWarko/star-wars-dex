import styled from 'styled-components'
import {breakpoints} from '../../utils/breakpoints'


export const Wrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    padding: 0 3.5vw 3.5vw;
    @media ${breakpoints.desktop}{
        margin: 0 auto;
        padding: 0 64px 64px;
    }
`
export const CardsArea = styled.div`
    @media ${breakpoints.desktop}{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`
export const ContainerFilter = styled.div`
    margin: 30px 0;
    text-align: left;
`
export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media ${breakpoints.desktop}{
        max-width: 630px;
    }
`
export const ContainerDetailCard = styled.div`
    width: 100%;
    @media ${breakpoints.desktop}{
        width: 266px;
        padding-left: 13px;
    }
`
export const CardCol = styled.div`
    margin-bottom: 5vw;
    display: flex;
    justify-content: center;
    width: 45vw;
    height: 45vw;
    @media ${breakpoints.tablet}{
        width: 30vw;
        height: 30vw;
        margin-bottom: 10px;
    }
    @media ${breakpoints.desktop}{
        width: 32%;
        height: 202px;
        margin-bottom: 10px;
    }
`