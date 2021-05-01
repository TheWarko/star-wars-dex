import styled,{ css } from 'styled-components'


export const DetailCard = styled.div`
    background-color: #fff;
    border: 1px solid #D5DADF; 
    width: 100%;
    ${props => props.active && css`
        border: 2px solid ${props => props.theme.basicColor}; 
    `}
`
export const Placeholder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 365px;
    text-align: center;
`
export const Content = styled.div`
    text-align: left;
    padding: 50px 30px 30px;
`
export const ContentList = styled.span`
    white-space: pre-wrap;
    display: inline-block;
    vertical-align: top;
    line-height: 1.4;
`
export const PlaceholderText = styled.p`
    font-style: italic;
    color: #c7c7c7;
    padding: 0 20px;
`
export const Name = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;
`
export const More = styled.div`
    font-size: 15px;
    line-height: 25px;
    color: #7C7C7C;
    p{ margin: 0}
`
export const ContentFooter = styled.div`
    background-color: #fbfbfb;
    display: flex;
    &> div{
        width: 50%;
        padding: 20px;
    }
`
export const ContentFooterValue = styled.p`
    color: ${props => props.filter === 'people' ? props.theme.firstColor : props.theme.secondColor};
    font-weight: 700;
    margin: 0;
    line-height: 25px;
`
export const ContentFooterLabel = styled.p`
    font-weight: 700;
    margin: 0;
    line-height: 25px;
`