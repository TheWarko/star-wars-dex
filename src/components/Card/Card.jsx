import styled from 'styled-components'
import {ReactComponent as IconMale} from '../../assets/icons/male-sign.svg'



const $Card = styled.div`
    background-color: #fff;
    border: 1px solid #D5DADF; 
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const $Name = styled.p`
    font-size: 15px;
    font-weight: 500;
`
const $Sex = styled.p`
    font-size: 15px;
    color: #7C7C7C;
`


const Card = () => {
    return (
        <$Card>
            <div>
                <IconMale width="32" stroke="#ff6458" stroke-width="2" />
                <$Name>Luke SkyWalker</$Name>
                <$Sex>male</$Sex>
            </div>
        </$Card>
    )
}

export default Card
