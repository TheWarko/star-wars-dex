import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {breakpoints} from '../../utils/breakpoints'
import Card from '../Card/Card'
import CardPlaceholder from '../Card/Card.placeholder'
import DetailCard from '../DetailCard/DetailCard'
import Filter from '../Filter/Filter'

const $Wrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    padding: 0 3.5vw 3.5vw;
    @media ${breakpoints.desktop}{
        margin: 0 auto;
        padding: 0 64px 64px;
    }
`
const $CardsArea = styled.div`
    @media ${breakpoints.desktop}{
        display: flex;
        justify-content: space-between;
    }
`
const $ContainerFilter = styled.div`
    margin: 30px 0;
    text-align: left;
`
const $ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media ${breakpoints.desktop}{
        max-width: 630px;
    }
`
const $ContainerDetailCard = styled.div`
    width: 100%;
    @media ${breakpoints.desktop}{
        width: 266px;
        padding-left: 13px;
    }
`
const $CardCol = styled.div`
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

const Cards = () => {

    const [characters, setCharacters] = useState(null)
    const [characterActive, setCharacterActive] = useState(null)
    const [filter, setFilter] = useState('people')

    useEffect(() => {
        setCharacters('')
        fetch('https://swapi.dev/api/'+filter)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results)
            })
    }, [filter])

    const clickHandler = (charac) => {
        setCharacterActive(charac)
    }
    const filterHandler = (myFilter) => {
        setFilter(myFilter)
        setCharacterActive(null)
    }

    return (
        <$Wrapper>
            <$ContainerFilter>
                <Filter active={filter} setFilter={filterHandler} />
            </$ContainerFilter>
            <$CardsArea>
                <$ContainerCards>
                    {characters ? (
                        characters.slice(0, 6).map((el, i) => {
                            return (
                                <$CardCol key={i}>
                                    <Card character={el} setCharacterActive={clickHandler} active={el == characterActive} />
                                </$CardCol>
                            )
                        })
                    ) : ( 
                        [...Array(6)].map((el, i) => <$CardCol key={i}><CardPlaceholder /></$CardCol>)
                    )
                }
                </$ContainerCards>
                <$ContainerDetailCard>
                    <DetailCard character={characterActive} />
                </$ContainerDetailCard>
            </$CardsArea>
        </$Wrapper>
    )

}

export default Cards
