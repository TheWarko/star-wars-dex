import { useState, useEffect } from 'react'
import styled,{ css } from 'styled-components'
import { ReactComponent as IconQuestion } from '../../assets/icons/question.svg'
import {ReactComponent as IconMale} from '../../assets/icons/male-sign.svg'
import {ReactComponent as IconFemale} from '../../assets/icons/female-sign.svg'
import {ReactComponent as IconRobot} from '../../assets/icons/robot-1.svg'
import {ReactComponent as IconUfo} from '../../assets/icons/ufo.svg'
import {ReactComponent as IconBug} from '../../assets/icons/bug.svg'

const $DetailCard = styled.div`
    background-color: #fff;
    border: 1px solid #D5DADF; 
    width: 100%;
    ${props => props.active && css`
        border: 2px solid #707070; 
    `}
`
const $Placeholder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 365px;
    text-align: center;
`
const $Content = styled.div`
    text-align: left;
    padding: 50px 30px 30px;
`
const $PlaceholderText = styled.p`
    font-style: italic;
    color: #c7c7c7;
`
const $Name = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;
`
const $More = styled.div`
    font-size: 15px;
    line-height: 25px;
    color: #7C7C7C;
    p{ margin: 0}
`
const ContentFooter = styled.div`
    background-color: #fbfbfb;
    display: flex;
    &> div{
        width: 50%;
        padding: 20px;
    }
`
const ContentFooterValue = styled.p`
    color: red;
    margin: 0;
    line-height: 25px;
`
const ContentFooterLabel = styled.p`
    font-weight: 700;
    margin: 0;
    line-height: 25px;
`


const DetailCard = (props) => {

    const {
        character
    } = props

    
    const SwitchCase = (props) => {
        switch (props.value) {
            case 'male':
                return (<IconMale width="48" stroke="#ff6458" strokeWidth="2" />)
            case 'female':
                return (<IconFemale width="48" stroke="#ff6458" strokeWidth="2" />)
            case 'sentient':
                return (<IconUfo width="48" stroke="#16a7cd" strokeWidth="2" />)
            case 'mammal':
                return (<IconFemale width="48" stroke="#16a7cd" strokeWidth="2" />)
            case 'artificial':
                return (<IconRobot width="48" stroke="#16a7cd" strokeWidth="2" />)
            case 'gastropod':
                return (<IconBug width="48" stroke="#16a7cd" strokeWidth="2" />)
            default:
                return (<IconRobot width="48" stroke="#ff6458" strokeWidth="2" />)
        }
    }

    return (
        <$DetailCard active={character ? true : false} >
            {
                character ?
                    <>
                        <$Content>
                            <SwitchCase value={character.gender || character.classification} />
                            <$Name>{character.name}</$Name>
                            <$More>
                                <p>Hair: {character.hair_color}</p>
                                <p>Eye: {character.eye_color}</p>
                                <p>Birth year: {character.birth_year}</p>
                            </$More>
                        </$Content>
                        <ContentFooter>
                            <div>
                                <ContentFooterValue>{character.height}</ContentFooterValue>
                                <ContentFooterLabel>height</ContentFooterLabel>
                            </div>
                            <div>
                                <ContentFooterValue>{character.mass}</ContentFooterValue>
                                <ContentFooterLabel>mass</ContentFooterLabel>
                            </div>
                        </ContentFooter>
                    </>
                    :
                    <$Placeholder>
                        <div>
                            <IconQuestion width="64" stroke="#c7c7c7" strokeWidth="2" fill="#c7c7c7" />
                            <$PlaceholderText>Seleziona un personaggio per guardare la scheda</$PlaceholderText>
                        </div>
                    </$Placeholder>

            }
        </$DetailCard>
    )
}

export default DetailCard
