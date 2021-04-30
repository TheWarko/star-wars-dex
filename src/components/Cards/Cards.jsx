import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {breakpoints} from '../../utils/breakpoints'
import Card from '../Card/Card'
import CardPlaceholder from '../Card/Card.placeholder'
import DetailCard from '../DetailCard/DetailCard'
import Filter from '../Filter/Filter'

const ScWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    padding: 0 3.5vw 3.5vw;
    @media ${breakpoints.desktop}{
        margin: 0 auto;
        padding: 0 64px 64px;
    }
`
const ScCardsArea = styled.div`
    @media ${breakpoints.desktop}{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`
const ScContainerFilter = styled.div`
    margin: 30px 0;
    text-align: left;
`
const ScContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media ${breakpoints.desktop}{
        max-width: 630px;
    }
`
const ScContainerDetailCard = styled.div`
    width: 100%;
    @media ${breakpoints.desktop}{
        width: 266px;
        padding-left: 13px;
    }
`
const ScCardCol = styled.div`
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
        fetch('https://swapi.dev/api/'+filter+'/')
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results)
            })
            .catch(err => console.error(err))
    }, [filter])

    const clickHandler = (charac) => {
        setCharacterActive(charac)
    }
    const filterHandler = (myFilter) => {
        setFilter(myFilter)
        setCharacterActive(null)
    }

    return (
        <ScWrapper>
            <ScContainerFilter>
                <Filter active={filter} setFilter={filterHandler} />
            </ScContainerFilter>
            <ScCardsArea>
                <ScContainerCards>
                    {characters ? (
                        characters.slice(0, 6).map((el, i) => {
                            return (
                                <ScCardCol key={i}>
                                    <Card character={el} setCharacterActive={clickHandler} active={el === characterActive} />
                                </ScCardCol>
                            )
                        })
                    ) : ( 
                        [...Array(6)].map((el, i) => <ScCardCol key={i}><CardPlaceholder /></ScCardCol>)
                    )
                }
                </ScContainerCards>
                <ScContainerDetailCard>
                    <DetailCard character={characterActive} filter={filter} />
                </ScContainerDetailCard>
            </ScCardsArea>
        </ScWrapper>
    )

}

export default Cards
