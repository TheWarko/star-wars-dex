import styled,{keyframes} from 'styled-components'

const $CardPlaceholder = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgb(255,255,255);
    border: 1px solid #D5DADF; 
    z-index: 44;
    overflow: hidden;
`
const loading = keyframes`
  0% {
    left: -45%;
  }
  100% {
    left: 100%;
  }
`
const $CardPlaceholderInner = styled.div`
    position: absolute;
    left: -45%;
    height: 100%;
    width: 45%;
    background-image: linear-gradient(to left, rgba(245,245,245, .05), rgba(245,245,245, .3), rgba(245,245,245, .6), rgba(245,245,245, .3), rgba(245,245,245, .05));
    animation: ${loading} 1s infinite;
    z-index: 45;
`



const CardPlaceholder = () => {
    return (
        <$CardPlaceholder>
            <$CardPlaceholderInner />
        </$CardPlaceholder>
    )
}

export default CardPlaceholder
