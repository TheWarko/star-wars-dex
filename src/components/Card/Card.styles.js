import styled,{ css, keyframes } from 'styled-components'


export const Card = styled.div`
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
export const Name = styled.p`
    font-size: 15px;
    font-weight: 500;
`
export const Gender = styled.p`
    font-size: 15px;
    color: #7C7C7C;
`



/* Placeholder styles from here */

export const CardPlaceholder = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgb(255,255,255);
    border: 1px solid #D5DADF; 
    z-index: 44;
    overflow: hidden;
`
export const loading = keyframes`
  0% {
    left: -45%;
  }
  100% {
    left: 100%;
  }
`
export const CardPlaceholderInner = styled.div`
    position: absolute;
    left: -45%;
    height: 100%;
    width: 45%;
    background-image: linear-gradient(to left, rgba(245,245,245, .05), rgba(245,245,245, .3), rgba(245,245,245, .6), rgba(245,245,245, .3), rgba(245,245,245, .05));
    animation: ${loading} 1s infinite;
    z-index: 45;
`