import { useState, useEffect } from 'react'
import * as S from './Cards.styles'
import Card from '../Card/Card'
import CardPlaceholder from '../Card/Card.placeholder'
import DetailCard from '../DetailCard/DetailCard'
import Filter from '../Filter/Filter'


const Cards = () => {

    const [characters, setCharacters] = useState(null)
    const [characterActive, setCharacterActive] = useState(null)
    const [filter, setFilter] = useState('people')

    useEffect(() => {
        setCharacters('')
        fetch('https://swapi.dev/api/' + filter + '/')
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
        <S.Wrapper>
            <S.ContainerFilter>
                <Filter active={filter} setFilter={filterHandler} />
            </S.ContainerFilter>
            <S.CardsArea>
                <S.ContainerCards>
                    {
                        characters ? (
                            characters.slice(0, 6).map((el, i) => {
                                return (
                                    <S.CardCol key={i}>
                                        <Card character={el} setCharacterActive={clickHandler} active={el === characterActive} />
                                    </S.CardCol>
                                )
                            })
                        ) : (
                            [...Array(6)].map((el, i) => <S.CardCol key={i}><CardPlaceholder data-testid="card-placeholder" /></S.CardCol>)
                        )
                    }
                </S.ContainerCards>
                <S.ContainerDetailCard>
                    <DetailCard character={characterActive} filter={filter} />
                </S.ContainerDetailCard>
            </S.CardsArea>
        </S.Wrapper>
    )

}

export default Cards
